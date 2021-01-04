import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarState: boolean = false;
  cartCount: number = 0;

  constructor(public auth: AuthService, private cart: CartService) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.getCartCount();
    }

    this.cart.dataChanged$.subscribe((changed) => {
      if (changed) this.getCartCount();
    });

    if (window.innerWidth >= 768) {
      this.navbarState = true;
    } else {
      this.navbarState = false;
    }
  }

  toggleNavbar() {
    this.navbarState = !this.navbarState;
  }

  setVisibilityonDesktop() {
    if (window.innerWidth >= 768) {
      this.navbarState = true;
    } else {
      this.navbarState = false;
    }
  }

  getCartCount() {
    this.cart.totalCartItemsCount().subscribe((data: any) => {
      this.cartCount = data;
    });
  }
}
