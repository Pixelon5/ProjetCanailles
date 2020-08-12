import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire'; // pour se connecter à Firebase
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database'; // pour manipuler la base de données Firebase
// pour accéder aux fonction de stockage et de récupération des fichiers
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PorteesComponent } from './pages/portees/portees.component';
import { ChiotsComponent } from './pages/chiots/chiots.component';
import { ReproducteursComponent } from './pages/reproducteurs/reproducteurs.component';
import { CarteComponent } from './components/cartes/carte.component';
import { CartePorteeComponent } from './components/cartes/carte-portee/carte-portee.component';
import { CarteReproducteurComponent } from './components/cartes/carte-reproducteur/carte-reproducteur.component';
import { CarteChiotComponent } from './components/cartes/carte-chiot/carte-chiot.component';
import { ListeCartesCarrousselComponent } from './components/listes/liste-cartes-carroussel/liste-cartes-carroussel.component';
import { ListeCartesGrilleComponent } from './components/listes/liste-cartes-grille/liste-cartes-grille.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { PorteesService } from './services/portees-service.service';
import { ChiotService } from './services/chiot-service.service';
import { environment } from 'src/environments/environment';



const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'portees', component: PorteesComponent},
  {path: 'reproducteurs/:genre', component: ReproducteursComponent},
];



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
    HeaderComponent,
    ModelsComponent,
    //Chiot.Model.TsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [ChiotService, PorteesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public afDB: AngularFireDatabase,
              public afSG: AngularFireStorage) {}
}
