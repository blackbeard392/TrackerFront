import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  constructor( private auth:AuthService, private route:Router, private activ:ActivatedRoute) { }

  
  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  
  

  loginUser(){
    this.auth.login()
    }



}
