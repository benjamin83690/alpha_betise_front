import { Livre } from "./LivreModel";

export interface Collection {
    id: number,
    nom: string,
    livres?: Livre[]
}