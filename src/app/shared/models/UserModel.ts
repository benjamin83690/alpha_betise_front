import { Evenement } from "./EvenementModel";

export interface User {
    id: number,
    nom?: string,
    prenom?: string,
    email: string,
    photo?: string,
    role?: string,
    evenementId?: Evenement[],
    commandes?: any[],
    commentaires?: any[],
}