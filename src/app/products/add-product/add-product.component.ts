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

  added_product = false
  success_msg:any
  

  constructor(private productServ:ProductServiceService, private route:Router) { }

  ngOnInit(): void {
  }

  back_to_Products(){
    this.route.navigate(['/products'])
  }

  add_product(){
    const product_name = this.productName.value
    const quantity = this.quantity.value
    this.productServ.add_product_http(product_name,quantity)
    this.added_product = true
    this.productForm.reset()
    
}

success_func(){
  this.success_msg = 'The product was added to the list of products'
  setTimeout(()=>{
    this.success_msg = ''
  },2500)
}

  productForm = new FormGroup({
    productName: new FormControl('',[Validators.minLength(2),Validators.maxLength(20),Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    quantity:new FormControl('',[Validators.required])
  })
  
  get productName(){
    return this.productForm.get('productName') as FormControl 
  } 
  get quantity(){
    return this.productForm.get('quantity') as FormControl
  } 


  
}
