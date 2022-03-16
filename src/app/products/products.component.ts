import {  Component,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductServiceService } from '../product-service.service';






@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit{
 

  constructor(private productServ: ProductServiceService, private auth:AuthService
    ) {
      
     }

    

  ngOnInit(): void {
    this.productServ.getProducts()
    
  }

  

public view(id:number):void{
  this.productServ.view_nav(id)
}

public edit(id:number):void{
  this.productServ.edit_nav(id)
  
}

public add_product():void{
  this.productServ.add_product_nav()
 
}

public delete(id:number):void{
this.productServ.delete_btn(id).subscribe({
  next:(res)=>console.log(res),
  error:(er)=>console.log(er)
})
}

public logout():void{
  this.auth.logout()
}

  
  


  data:any = this.productServ.getProducts();
  displayedColumns: string [] = ['id','productName', 'quantity','editView']
}
