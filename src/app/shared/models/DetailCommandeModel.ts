import { Commande } from "./CommandeModel";
import { Livre } from "./LivreModel";

export interface DetailCommande {
    id: number,
    livre: Livre,
    commande: Commande,
    quantite: number
}