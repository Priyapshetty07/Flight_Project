import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FlightsDetailsComponent } from './components/flights-details/flights-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { FlightBookingComponent } from './routing/flight-booking/flight-booking.component';
import { FlightsComponent } from './routing/flights/flights.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home',component:HomeComponent},
   {path:'flightsDetails',component:FlightsDetailsComponent},
   {path:'flights/search',component:FlightsComponent},
   {path:'flightbooking',component:FlightBookingComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'adminAdd',component:AdminAddComponent},
  {path:'adminEdit',component:AdminEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
