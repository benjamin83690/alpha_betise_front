import { Livre } from "./LivreModel";

export interface Auteur {
    id: number,
    nom: string,
    livres?: Livre[],
}