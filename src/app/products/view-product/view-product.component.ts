import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  back_to_Products(){
    this.route.navigate(['/products'])
  }
  
  products = this.productServ.getProducts()
  view_id = this.productServ.view_id


  constructor(private productServ:ProductServiceService, private route: Router ) { }

  ngOnInit(): void {
  }
  
}
