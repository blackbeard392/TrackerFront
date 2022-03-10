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

  products = this.productServ.getProducts()
  edit_product_id = this.productServ.edit_product_id
  product_updated = false

  updated_product_msg:any

  constructor(private productServ:ProductServiceService, private route:Router) { }

  ngOnInit(): void {}

back_to_Products(){
  this.route.navigate(['/products'])
}



  updateProduct(){
    
    const quantity = this.quantity.value
    const prod_name = this.name.value
    this.productServ.updateProduct_http(prod_name,quantity)
    this.product_updated = true
    
  }

  updated_product(){
    this.updated_product_msg = 'The product was updated succesfully'
    setTimeout(()=>{
        this.updated_product_msg = ''
    },2500)
  }

  productForm = new FormGroup({
    prod_name: new FormControl(this.products[this.edit_product_id].productName),
    quantity:new FormControl(this.products[this.edit_product_id].quantity,[Validators.minLength(1),Validators.required])
  })
  get quantity() { return this.productForm.get('quantity') as FormControl }
  get name(){return this.productForm.get('prod_name')as FormControl}
}
