import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GestionTournoisComponent } from './components/gestion-tournois/gestion-tournois.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnectionComponent } from './components/connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GestionTournoisComponent,
    AccueilComponent,
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
