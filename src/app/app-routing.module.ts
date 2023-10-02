import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';


const routes: Routes = [
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'list-produit', component: ListProduitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
