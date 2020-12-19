import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { AuthService } from './Services/auth.service';
import { JwtModule } from "@auth0/angular-jwt";
import { LogoutComponent } from './Pages/logout/logout.component';
import { MenuNavigationComponent } from './Shared/menu-navigation/menu-navigation.component';
import { DeliveryCardComponent } from './Pages/home/delivery-card/delivery-card.component';
import { OrderMenuListComponent } from './Shared/order-menu-list/order-menu-list.component';
import { MenuOrderItemComponent } from './Shared/menu-order-item/menu-order-item.component';
import { ClientReviewsComponent } from './Shared/client-reviews/client-reviews.component';


export function tokenGetter() {
  return localStorage.getItem("token");
}



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OrdersComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    MenuNavigationComponent,
    DeliveryCardComponent,
    OrderMenuListComponent,
    MenuOrderItemComponent,
    ClientReviewsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:tokenGetter,
        allowedDomains: ["localhost:5000"]
      },
    }),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
