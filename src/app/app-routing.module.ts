import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : "" ,
    component :  ProductListComponent
  },
  {
    path : "about-us" ,
    component :  AboutUsComponent 
  },
  {
    path : "product-details/:id" ,
    component :ProductDetailsComponent 
  },
  {
    path : "log-in" ,
    component :  LogInComponent
  }
  ,
  {
    path : "register" ,
    component :  RegisterComponent
  },
  // {
  //   path : "/register" ,
  //   component :  RegisterComponent
  // },
  {
    path : "**" ,
    component :  NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
