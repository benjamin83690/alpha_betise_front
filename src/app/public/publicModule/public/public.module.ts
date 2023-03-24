import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/sharedModule/shared/shared.module';
import { AccueilComponent } from '../../components/accueil/accueil.component';
import { CommentaireComponent } from '../../components/commentaire/commentaire.component';
import { ConseilsLectureComponent } from '../../components/conseils-lecture/conseils-lecture.component';
import { EvenementComponent } from '../../components/evenement/evenement.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { InscriptionEvenementComponent } from '../../components/inscription-evenement/inscription-evenement.component';
import { InscriptionComponent } from '../../components/inscription/inscription.component';
import { InterditComponent } from '../../components/interdit/interdit.component';
import { LibrairieComponent } from '../../components/librairie/librairie.component';
import { LoginComponent } from '../../components/login/login.component';
import { PanierComponent } from '../../components/panier/panier.component';
import { ProduitComponent } from '../../components/produit/produit.component';
import { ProfilComponent } from '../../components/profil/profil.component';
import { RencontresComponent } from '../../components/rencontres/rencontres.component';
import { TeaserEvenementComponent } from '../../components/teaser-evenement/teaser-evenement.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LivreComponent } from '../../components/livre/livre.component';


@NgModule({
  declarations: [
    AccueilComponent,
    CommentaireComponent,
    ConseilsLectureComponent,
    EvenementComponent,
    FooterComponent,
    InscriptionEvenementComponent,
    InscriptionComponent,
    InterditComponent,
    LibrairieComponent,
    LoginComponent,
    PanierComponent,
    ProduitComponent,
    ProfilComponent,
    RencontresComponent,
    TeaserEvenementComponent,
    HeaderComponent,
    LivreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ], 
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class PublicModule { }
