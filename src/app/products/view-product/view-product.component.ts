import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public back_to_Products():void{
    this.route.navigate(['/products'])
  }
  
  products:any= this.productServ.getProducts()
  view_id:number= this.productServ.view_id


  constructor(private productServ:ProductServiceService, private route: Router ) { }

  ngOnInit(): void {
  }
  
}
