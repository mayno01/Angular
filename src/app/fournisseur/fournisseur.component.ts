import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  idFournisseur: number;
  code: string;
  libelle: string;

  constructor() {
  
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
  }
}
