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
import { ListeCartesPorteesComponent } from './components/listes/liste-cartes-portees/liste-cartes-portees.component';
import { ListeCartesReproducteursComponent } from './components/listes/liste-cartes-reproducteurs/liste-cartes-reproducteurs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PorteesService } from './services/portees.service';
import { ChiotService } from './services/chiot.service';
import { environment } from 'src/environments/environment';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { ListeCartesChiotsComponent } from './components/listes/liste-cartes-chiots/liste-cartes-chiots.component';



const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'portees', component: PorteesComponent},
  {path: 'reproducteurs/:genre', component: ReproducteursComponent},
  {path: 'portees/view/:id', component: ChiotsComponent }
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
    ListeCartesPorteesComponent,
    ListeCartesReproducteursComponent,
    HeaderComponent,
    ListeCartesChiotsComponent
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
    CarouselModule.forRoot()
  ],
  providers: [ChiotService, PorteesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public afDB: AngularFireDatabase,
              public afSG: AngularFireStorage) {}
}
