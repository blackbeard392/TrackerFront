import { Injectable, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Product} from "./interface Product"





@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnInit{
  view_id!:number
  edit_product_id!:number
  url_GetAll:string = "https://localhost:7000/Products/GetAll"
  url_Post:string = "https://localhost:7000/Products/AddProduct"
  url_update:string = "https://localhost:7000/Products/UpdateProduct/"
  url_Delete:string = "https://localhost:7000/Products/Delete_Product/" 
  all_products_async:any
  
  
  



  constructor(private router:Router, private http:HttpClient,private route:ActivatedRoute) { }

ngOnInit():void {

}


// add new product to database
public add_product_http(name:string, num:number):Observable<Object>{
  var obj = {
    Id:this.all_products_async.length + 1,
    ProductName:name,
    Quantity:num
   } 
 return this.http.post(this.url_Post,obj)
}

// delete product from database
public delete_btn(id:number):Observable<Object>{
    return this.http.delete(this.url_Delete + this.all_products_async[id].id)
}

// returns products for ProductsComponent
public getProducts():Observable<Object>{
 return this.all_products_async
}

//return all products from database
public get_AllProducts_http():Observable<Object>{
  return this.http.get(this.url_GetAll)
}

// Update Product in database
public updateProduct_http(prod_name:string,quantity_num:number):Observable<Object>{
  return this.http.put(this.url_update + this.all_products_async[this.edit_product_id].id,{
    Id:this.all_products_async[this.edit_product_id].id,
    ProductName:prod_name,
    Quantity:quantity_num
  })
}



// view one product
public view_nav(id:number):void{
  this.view_id = id
  this.router.navigate(['/view-product',this.all_products_async[id].id])
}

// navigate to edit page
public edit_nav(id:number):void{
  this.edit_product_id = id
  this.router.navigate(['/edit-product',this.all_products_async[id].id])
}

// navigate to add product page
public add_product_nav():void{
  this.router.navigateByUrl('/add-product')
  
}



}
