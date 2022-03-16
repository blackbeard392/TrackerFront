import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../interface Product';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
    
  
  constructor( private auth:AuthService, private route:Router, private activ:ActivatedRoute, 
    private productServ:ProductServiceService) { }

  
  ngOnInit(): void {
    this.productServ.get_AllProducts_http().subscribe({
      next:(res)=>this.productServ.all_products_async = res
    })
  }
  

  
  

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  
  

  public loginUser():void{
    
    this.auth.login()
    }



}
