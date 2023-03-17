import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilsLectureComponent } from './components/conseils-lecture/conseils-lecture.component';
import { InscriptionEvenementComponent } from './components/inscription-evenement/inscription-evenement.component';
import { RencontresComponent } from './components/rencontres/rencontres.component';
import { EVENT_CONF } from './configs/EventConfig';
import { NextEventConfig } from './configs/NextEventConfig';
import { PastEventConfig } from './configs/PastEventConfig';
import { ProduitComponent } from './components/produit/produit.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProfilComponent } from './components/profil/profil.component';

const routes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'inscription', component: InscriptionComponent},
  { path: 'produit', component: ProduitComponent },
  {
    path: 'evenements',
    component: RencontresComponent,
    providers: [{ provide: EVENT_CONF, useValue: NextEventConfig }],
  },
  {
    path: 'archives',
    component: RencontresComponent,
    providers: [{ provide: EVENT_CONF, useValue: PastEventConfig }],
  },
  { path: 'conseils-lecture', component: ConseilsLectureComponent },
  {
    path: 'inscription/:id',
    component: InscriptionEvenementComponent,
    providers: [{ provide: EVENT_CONF, useValue: NextEventConfig }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
