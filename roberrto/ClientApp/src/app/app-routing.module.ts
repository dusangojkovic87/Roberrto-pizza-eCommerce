import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { PizzaOrdersListComponent } from './Shared/pizza-orders-list/pizza-orders-list.component';
import { SandwichOrdersListComponent } from './Shared/sandwich-orders-list/sandwich-orders-list.component';
import { DrinksOrdersListComponent } from './Shared/drinks-orders-list/drinks-orders-list.component';
import { DesertOrdersListComponent } from './Shared/desert-orders-list/desert-orders-list.component';
import { MenuOrderItemDetailsComponent } from './Shared/menu-order-item-details/menu-order-item-details.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { AuthGuard } from './Guards/auth.guard';
import { AdminComponent } from './Pages/admin/admin.component';
import { AddProductFormComponent } from './Pages/admin/add-product-form/add-product-form.component';
import { EditProductListComponent } from './Pages/admin/edit-product-list/edit-product-list.component';
import { EditProductFormComponent } from './Pages/admin/edit-product-list/edit-product-form/edit-product-form.component';
import { AddTeamMemberFormComponent } from './Pages/admin/add-team-member-form/add-team-member-form.component';
import { AddReviewFormComponent } from './Pages/admin/add-review-form/add-review-form.component';
import { GalleryImgFormComponent } from './Pages/admin/gallery-img-form/gallery-img-form.component';
import { MyordersComponent } from './Pages/myorders/myorders.component';
import { OrderDetailsComponent } from './Pages/myorders/order/order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'my-orders', component: MyordersComponent},
  { path: 'my-orders/order-details/:id', component: OrderDetailsComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: "add",pathMatch:'full'},
      { path: 'add', component: AddProductFormComponent },
      { path: 'edit', component: EditProductListComponent },
      { path: 'edit/:id', component: EditProductFormComponent },
      { path: 'add-team-member', component: AddTeamMemberFormComponent },
      { path: 'review', component: AddReviewFormComponent },
      { path: 'gallery-img', component: GalleryImgFormComponent }

    ]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      { path: '', redirectTo: 'pizza', pathMatch: 'full' },
      { path: 'pizza', component: PizzaOrdersListComponent },
      { path: 'sandwich', component: SandwichOrdersListComponent },
      { path: 'drinks', component: DrinksOrdersListComponent },
      { path: 'desert', component: DesertOrdersListComponent },
    ],
  },
  { path: 'details/:id', component: MenuOrderItemDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
