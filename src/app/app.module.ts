import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PorteesComponent } from './pages/portees/portees.component';
import { ChiotsComponent } from './pages/chiots/chiots.component';
import { ReproducteursComponent } from './pages/reproducteurs/reproducteurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PorteesComponent,
    ChiotsComponent,
    ReproducteursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
