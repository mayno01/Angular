

export class Produit {
    idProduit: number;
    code: string;
    libelle: string;
    prixUnitaire: number;
    tauxTVA: number;
  
    constructor(
      idProduit: number = 0,
      code: string = '',
      libelle: string = '',
      prixUnitaire: number = 0,
      tauxTVA: number = 0
    ) {
      this.idProduit = idProduit;
      this.code = code;
      this.libelle = libelle;
      this.prixUnitaire = prixUnitaire;
      this.tauxTVA = tauxTVA;
    }
  }
  