import { Injectable, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnInit{
  view_id:any
  edit_product_id:any
  products_route:any
  url_GetAll = "https://localhost:7000/Products/GetAll"
  url_Post = "https://localhost:7000/Products/AddProduct"
  url_update = "https://localhost:7000/Products/UpdateProduct/"
  url_Delete = "https://localhost:7000/Products/Delete_Product/" 
  all_products_async:any
  success:any
  



  constructor(private router:Router, private http:HttpClient,private route:ActivatedRoute) { }

ngOnInit() {

}

  

// add new product to database
add_product_http(name:string, num:number){
  var obj = {
    Id:this.all_products_async.length + 1,
    ProductName:name,
    Quantity:num
   } 

    this.http.post(this.url_Post,
     obj
    ).subscribe({
      next:(res)=>console.log(res),
      error:(e)=>console.log(e)
    })
}

// delete product from database
delete_btn(id:number){
  
  this.http.delete(this.url_Delete + this.all_products_async[id].id).subscribe({
    next:(res)=> console.log(res),
    error:(e)=>console.log(e)
  })
}

// returns products for ProductsComponent
getProducts(){
 return this.all_products_async
}

//return all products from database
get_AllProducts_http(){
  this.http.get(this.url_GetAll).subscribe({
  next:(res)=>{
    this.all_products_async = res
  }
  })
}

// Update Product in database
updateProduct_http(prod_name:string,quantity_num:number){
  this.http.put(this.url_update + this.all_products_async[this.edit_product_id].id,{
    Id:this.all_products_async[this.edit_product_id].id,
    ProductName:prod_name,
    Quantity:quantity_num
  }).subscribe({
      next:(res)=>console.log(res)
  })
}



// view one product
view_nav(id:number){
  this.view_id = id
  this.router.navigate(['/view-product',this.all_products_async[id].id])
}

// navigate to edit page
edit_nav(id:number){
  this.edit_product_id = id
  this.router.navigate(['/edit-product',this.all_products_async[id].id])
}

// navigate to add product page
add_product_nav(){
  this.router.navigateByUrl('/add-product')
  this.get_AllProducts_http()
}



}
