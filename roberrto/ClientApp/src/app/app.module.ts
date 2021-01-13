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
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LogoutComponent } from './Pages/logout/logout.component';
import { MenuNavigationComponent } from './Shared/menu-navigation/menu-navigation.component';
import { DeliveryCardComponent } from './Pages/home/delivery-card/delivery-card.component';
import { MenuOrderItemComponent } from './Shared/menu-order-item/menu-order-item.component';
import { ClientReviewsComponent } from './Shared/client-reviews/client-reviews.component';
import { MapLocationComponent } from './Shared/map-location/map-location.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { AboutUsDescComponent } from './Pages/about/about-us-desc/about-us-desc.component';
import { GalleryComponent } from './Pages/about/gallery/gallery.component';
import { GalleryImgComponent } from './Pages/about/gallery/gallery-img/gallery-img.component';
import { FullSizeImgComponent } from './Pages/about/gallery/full-size-img/full-size-img.component';
import { TeamMembersListComponent } from './Pages/team-members-list/team-members-list.component';
import { TeamMemberComponent } from './Pages/team-members-list/team-member/team-member.component';
import { TopOrdersMenuListComponent } from './Shared/top-orders-menu-list/top-orders-menu-list.component';
import { PizzaOrdersListComponent } from './Shared/pizza-orders-list/pizza-orders-list.component';
import { MenuOrdersNavigationComponent } from './Pages/orders/menu-orders-navigation/menu-orders-navigation.component';
import { SandwichOrdersListComponent } from './Shared/sandwich-orders-list/sandwich-orders-list.component';
import { DrinksOrdersListComponent } from './Shared/drinks-orders-list/drinks-orders-list.component';
import { DesertOrdersListComponent } from './Shared/desert-orders-list/desert-orders-list.component';
import { MenuOrderItemDetailsComponent } from './Shared/menu-order-item-details/menu-order-item-details.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { MenuCheckoutItemComponent } from './Shared/menu-checkout-item/menu-checkout-item.component';
import { AuthInterceptor } from './HttpInterceptors/AuthInterceptor';
import { CartItemComponent } from './Pages/checkout/cart-item/cart-item.component';
import { CartItemListComponent } from './Pages/checkout/cart-item-list/cart-item-list.component';
import { AddToCartModalComponent } from './Shared/add-to-cart-modal/add-to-cart-modal.component';
import { TakeOrderFormComponent } from './Pages/checkout/take-order-form/take-order-form.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AddProductFormComponent } from './Pages/admin/add-product-form/add-product-form.component';
import { EditProductListComponent } from './Pages/admin/edit-product-list/edit-product-list.component';
import { EditProductComponent } from './Pages/admin/edit-product-list/edit-product/edit-product.component';
import { EditProductFormComponent } from './Pages/admin/edit-product-list/edit-product-form/edit-product-form.component';

export function tokenGetter() {
  return localStorage.getItem('token');
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
    MenuOrderItemComponent,
    ClientReviewsComponent,
    MapLocationComponent,
    FooterComponent,
    AboutUsDescComponent,
    GalleryComponent,
    GalleryImgComponent,
    FullSizeImgComponent,
    TeamMembersListComponent,
    TeamMemberComponent,
    TopOrdersMenuListComponent,
    PizzaOrdersListComponent,
    MenuOrdersNavigationComponent,
    SandwichOrdersListComponent,
    DrinksOrdersListComponent,
    DesertOrdersListComponent,
    MenuOrderItemDetailsComponent,
    CheckoutComponent,
    MenuCheckoutItemComponent,
    CartItemComponent,
    CartItemListComponent,
    AddToCartModalComponent,
    TakeOrderFormComponent,
    AdminComponent,
    AddProductFormComponent,
    EditProductListComponent,
    EditProductComponent,
    EditProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
      },
    }),
  ],
  providers: [AuthService, AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
