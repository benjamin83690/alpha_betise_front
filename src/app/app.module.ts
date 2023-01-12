import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LivreComponent } from './components/livre/livre.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RencontresComponent } from './components/rencontres/rencontres.component';
import { LibrairieComponent } from './components/librairie/librairie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivreComponent,
    EvenementComponent,
    CommentaireComponent,
    AccueilComponent,
    RencontresComponent,
    LibrairieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
