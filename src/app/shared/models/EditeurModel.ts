import { Livre } from "./LivreModel";

export interface Editeur {
    id: number,
    nom: string,
    livres?: Livre[],
}