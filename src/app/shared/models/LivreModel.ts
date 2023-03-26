import { Auteur } from "./AuteurModel";
import { Categorie } from "./CategorieModel";
import { Collection } from "./CollectionModel";
import { Editeur } from "./EditeurModel";
import { EtatStock } from "./EtatStockModel";
import { Langue } from "./LangueModel";

export interface Livre {
    isbn: number,
    titre: string,
    prix?: number,
    resume?: string,
    nbPages?: number,
    datePublication?: string,
    poids?: number,
    nbExemplaires?: number,
    longueur?: number,
    largeur?: number,
    epaisseur?: number,
    categorieLivre?: Categorie,
    collectionLivre?: Collection,
    editeur?: Editeur,
    photoLivre?: string,
    langue?: Langue,
    etatStock?: EtatStock,
    auteurs?: Auteur[],
}