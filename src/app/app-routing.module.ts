import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { AddTournoiComponent } from './components/tournoi/add-tournoi/add-tournoi.component';
import { TournoiComponent } from './components/tournoi/tournoi.component';

const routes: Routes = [
  { path : 'tournoi', component : TournoiComponent },
  { path : 'tournoi/add', component : AddTournoiComponent },
  { path : 'accueil', component : AccueilComponent },
  { path : 'connection', component : ConnectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
