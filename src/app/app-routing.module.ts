import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilsLectureComponent } from './public/components/conseils-lecture/conseils-lecture.component';
import { InscriptionEvenementComponent } from './public/components/inscription-evenement/inscription-evenement.component';
import { RencontresComponent } from './public/components/rencontres/rencontres.component';
import { EVENT_CONF } from './public/configs/EventConfig';
import { NextEventConfig } from './public/configs/NextEventConfig';
import { PastEventConfig } from './public/configs/PastEventConfig';
import { ProduitComponent } from './public/components/produit/produit.component';
import { LoginComponent } from './public/components/login/login.component';
import { InscriptionComponent } from './public/components/inscription/inscription.component';
import { AccueilComponent } from './public/components/accueil/accueil.component';
import { ProfilComponent } from './public/components/profil/profil.component';
import { LivresComponent } from './back-office/components/livres/livres.component';
import { InterditComponent } from './public/components/interdit/interdit.component';
import { IsAdminConnectedGuard } from './shared/guards/isAdminConnectedGuard/is-admin-connected.guard';
import { AddLivreComponent } from './back-office/components/add-livre/add-livre.component';
import { UpdateLivreComponent } from './back-office/components/update-livre/update-livre.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'profil', component: ProfilComponent},
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
  {path: 'interdit', component: InterditComponent},
  {path: 'back-office',
  canActivate: [IsAdminConnectedGuard],
  children: [
    {path: 'gestion-livre', component: LivresComponent},
    {path: 'ajouter-livre', component: AddLivreComponent},
    {path: 'modifier-livre/:isbn', component: UpdateLivreComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
