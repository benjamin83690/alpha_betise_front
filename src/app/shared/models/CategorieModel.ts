import { Livre } from "./LivreModel";

export interface Categorie {
    id: number,
    libelle: string,
    livres?: Livre[]
}