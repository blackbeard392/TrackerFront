import { Component,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from "@angular/router";




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
 dif_array:any 

  constructor(private productServ: ProductServiceService, private auth:AuthService, 
    private route:ActivatedRoute
    ) {
      
     }


  ngOnInit(): void {
    this.productServ.get_AllProducts_http()
    this.productServ.getProducts()
  }

 

view(id:number){
  this.productServ.view_nav(id)
}

edit(id:number){
  this.productServ.edit_nav(id)
  this.productServ.products_route = this.route
}

add_product(){
  this.productServ.add_product_nav()
  this.productServ.products_route = this.route
}

delete(id:number){
this.productServ.delete_btn(id)
}

logout(){
  this.auth.logout()
}

  
  


  data = this.productServ.getProducts();
  displayedColumns: string [] = ['id','productName', 'quantity','editView']
}
