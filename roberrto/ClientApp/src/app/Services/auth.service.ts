import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,public jwtHelper: JwtHelperService,private router:Router) { }


  register(formData:any){
    return this.http.post("http://localhost:5000/authentication/register/",formData);
  }

  login(formData:any){
    return this.http.post("http://localhost:5000/authentication/login/",formData);
  }

  isAuthenticated():boolean{
    const token:any = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/"]);

  }



}
