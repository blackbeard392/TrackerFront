import { Component, OnInit} from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  added_product:boolean = false
  success_msg!:string
  

  constructor(private productServ:ProductServiceService, private route:Router) { }

  ngOnInit(): void {
  }

  public back_to_Products():void{
    this.route.navigate(['/products'])
  }

 public add_product():void{
    const product_name:string = this.productName.value
    const quantity:number = this.quantity.value
    this.productServ.add_product_http(product_name,quantity).subscribe({
      next:(res)=>console.log(res),
      error:(er)=>console.log(er)
    })
    this.added_product = true
    this.productForm.reset()
    
}

public success_func():void{
  this.success_msg = 'The product was added to the list of products'
  setTimeout(()=>{
    this.success_msg = ''
  },2500)
}

 public productForm = new FormGroup({
    productName: new FormControl('',[Validators.minLength(2),Validators.maxLength(20),Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    quantity:new FormControl('',[Validators.required])
  })
  
  public get productName():FormControl{
    return this.productForm.get('productName') as FormControl 
  } 
  public get quantity():FormControl{
    return this.productForm.get('quantity') as FormControl
  } 


  
}
