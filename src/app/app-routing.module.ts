import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
  {path:"signup" ,component:SignupComponent},
  {path:"product" ,component:ProductComponent},
  {path:"" ,component:HomeComponent},
  {path:"login" ,component:LoginComponent},
  {path:"viewcart" ,component:ViewcartComponent},
  {path:"chart/:id" ,component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
