import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { TournoiComponent } from './components/tournoi/tournoi.component';
import { AddTournoiComponent } from './components/tournoi/add-tournoi/add-tournoi.component';
import { DetailsTournoiComponent } from './components/tournoi/details-tournoi/details-tournoi.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ConnectionComponent,
    TournoiComponent,
    AddTournoiComponent,
    DetailsTournoiComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
