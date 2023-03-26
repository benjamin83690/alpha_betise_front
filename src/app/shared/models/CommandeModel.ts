import { DetailCommande } from "./DetailCommandeModel";
import { EtatCommande } from "./EtatCommandeModel";
import { User } from "./UserModel";

export interface Commande {
    id: number,
    dateCommande: string,
    prixTotal: number,
    rue: string,
    ville: string,
    codePostal: string,
    utilisateurId: User,
    detailsCommande: DetailCommande[],
    etatCommande: EtatCommande
}