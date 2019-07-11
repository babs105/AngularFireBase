import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './componenent/home/home.component';
import { LoginComponent } from './componenent/login/login.component';
import { ProfileComponent } from './componenent/profile/profile.component';
import { DashbaordComponent } from './componenent/dashbaord/dashbaord.component';
import {DetailsComponent} from './componenent/details/details.component';
import {PageNotFoundComponent} from './componenent/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateCustomerComponent } from './componenent/create-customer/create-customer.component';
import { CustomersListComponent } from './componenent/customers-list/customers-list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'details/:name',component:DetailsComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'customers',component:CustomersListComponent},
  {path:'add',component:CreateCustomerComponent},
  {path:'dashbaord',component:DashbaordComponent,canActivate:[AuthGuard]},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
