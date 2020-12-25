import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { RegisterComponent } from './Pages/register/register.component';
import {AuthGuard} from "../app/Guards/auth.guard";
import { LogoutComponent } from './Pages/logout/logout.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"orders",component:OrdersComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
