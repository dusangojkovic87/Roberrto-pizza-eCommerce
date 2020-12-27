import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { RegisterComponent } from './Pages/register/register.component';
import {AuthGuard} from "../app/Guards/auth.guard";
import { LogoutComponent } from './Pages/logout/logout.component';
import { PizzaOrdersListComponent } from './Shared/pizza-orders-list/pizza-orders-list.component';
import { SandwichOrdersListComponent } from './Shared/sandwich-orders-list/sandwich-orders-list.component';
import { DrinksOrdersListComponent } from './Shared/drinks-orders-list/drinks-orders-list.component';
import { DesertOrdersListComponent } from './Shared/desert-orders-list/desert-orders-list.component';
import { MenuOrderItemDetailsComponent } from './Shared/menu-order-item-details/menu-order-item-details.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"orders",component:OrdersComponent,
    children:[
      {path:"",redirectTo:"pizza",pathMatch:"full"},
      {path:"pizza",component:PizzaOrdersListComponent},
      {path:"sandwich",component:SandwichOrdersListComponent},
      {path:"drinks",component:DrinksOrdersListComponent},
      {path:"desert",component:DesertOrdersListComponent}
    ]
  },
  {path:"details/:id",component:MenuOrderItemDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
