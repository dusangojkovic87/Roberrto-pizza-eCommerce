import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   navbarState:boolean = false;

  constructor() { }

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
