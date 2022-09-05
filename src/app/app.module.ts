import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FlightsDetailsComponent } from './components/flights-details/flights-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './materials/materials.module';
import { FlightsComponent } from './routing/flights/flights.component';
import { FlightBookingComponent } from './routing/flight-booking/flight-booking.component';
import { InsertFlightComponent } from './admin/insert-flight/insert-flight.component';
import { UpdateFlightComponent } from './admin/update-flight/update-flight.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactUsComponent,
    FlightsDetailsComponent,
    FlightsComponent,
    FlightBookingComponent,
    InsertFlightComponent,
    UpdateFlightComponent,
    
   
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialExampleModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
