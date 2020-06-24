import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {BlogComponent} from './blog/blog.component';

const routes: Routes = [
  {
    path : 'login' , component: UserLoginComponent
  },
  {
    path : 'registration' , component: UserRegistrationComponent
  },
  {
    path : 'blog' , component : BlogComponent
  },
  {
    path : '', redirectTo : '/login',pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
