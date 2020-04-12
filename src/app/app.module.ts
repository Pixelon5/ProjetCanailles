import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PorteesComponent } from './pages/portees/portees.component';
import { ChiotsComponent } from './pages/chiots/chiots.component';
import { ReproducteursComponent } from './pages/reproducteurs/reproducteurs.component';
import { CarteComponent } from './components/carte/carte.component';
import { CartePorteeComponent } from './components/carte/carte-portee/carte-portee.component';
import { CarteReproducteurComponent } from './components/carte/carte-reproducteur/carte-reproducteur.component';
import { CarteChiotComponent } from './components/carte/carte-chiot/carte-chiot.component';
import { ListeCartesCarrousselComponent } from './components/listes/liste-cartes-carroussel/liste-cartes-carroussel.component';
import { ListeCartesGrilleComponent } from './components/listes/liste-cartes-grille/liste-cartes-grille.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PorteesComponent,
    ChiotsComponent,
    ReproducteursComponent,
    CarteComponent,
    CartePorteeComponent,
    CarteReproducteurComponent,
    CarteChiotComponent,
    FooterComponent,
    ListeCartesCarrousselComponent,
    ListeCartesGrilleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
