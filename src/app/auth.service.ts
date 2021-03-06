import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

logged_in = true
user:any
pass:any


  constructor( private router:Router) { 

  }

  canActivate(state:ActivatedRouteSnapshot,route:RouterStateSnapshot):boolean{
    if(this.logged_in){
      return true
    }
    return false
  }

  

login(){
  this.logged_in = true
  this.router.navigate(['products'])
  }


logout(){
  this.logged_in = false
  this.router.navigate(['login'])
}

}
