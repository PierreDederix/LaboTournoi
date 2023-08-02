import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { GestionTournoisComponent } from './components/gestion-tournois/gestion-tournois.component';

const routes: Routes = [
  { path : 'gestion', component : GestionTournoisComponent },
  { path : 'accueil', component : AccueilComponent },
  { path : 'connection', component : ConnectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
