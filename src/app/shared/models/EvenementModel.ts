import { Auteur } from "./AuteurModel";
import { Livre } from "./LivreModel";
import { User } from "./UserModel";

export interface Evenement {
    id: number,
    titre: string,
    maxParticipants?: number,
    agePublic: string,
    prix?: number,
    rue: string,
    ville: string,
    codePostal: string,
    description: string,
    date: string,
    heureEvenement: string,
    utilisateurs?: User[],
    livre?: Livre,
    auteurs?: Auteur[],
}