import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  products:any = this.productServ.getProducts()
  edit_product_id:number= this.productServ.edit_product_id
  product_updated:boolean = false

  updated_product_msg!:string

  constructor(private productServ:ProductServiceService, private route:Router) { }

  ngOnInit(): void {}

public back_to_Products():void{
  this.route.navigate(['/products'])
}



  public updateProduct():void{
    
    const quantity:any = this.quantity.value
    const prod_name:any = this.name.value
    this.productServ.updateProduct_http(prod_name,quantity).subscribe({
      next:(res)=>console.log(res),
      error:(er)=>console.log(er)
    })
    this.product_updated = true
    
  }

  public updated_product():void{
    this.updated_product_msg = 'The product was updated succesfully'
    setTimeout(()=>{
        this.updated_product_msg = ''
    },2500)
  }

  public productForm = new FormGroup({
    prod_name: new FormControl(this.products[this.edit_product_id].productName),
    quantity:new FormControl(this.products[this.edit_product_id].quantity,[Validators.minLength(1),Validators.required])
  })
  public get quantity():FormControl { return this.productForm.get('quantity') as FormControl }
  public get name():FormControl{return this.productForm.get('prod_name')as FormControl}
}
