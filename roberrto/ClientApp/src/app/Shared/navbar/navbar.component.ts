import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   navbarState:boolean = false;

  constructor(public auth:AuthService) { }

  ngOnInit(): void {

    if(window.innerWidth >= 768){
      this.navbarState = true;
    }else{
      this.navbarState = false;
     }
  }

  toggleNavbar(){
    this.navbarState = !this.navbarState;
  }

  setVisibilityonDesktop(){
    if(window.innerWidth >= 768){
      this.navbarState = true;
    }else{
      this.navbarState = false;
    }
  }



}
