import { Injectable } from '@angular/core';
import { Reproducteur } from '../shared/models/reproducteur.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Genre} from '../shared/models/enums';

@Injectable({
  providedIn: 'root'
})
export class ReproducteursService {

  constructor(private firestore: AngularFirestore) {
    // this.getReproducteurs();
  }

  reproducteur: Reproducteur[] = [];

  // recuperer la liste des reproducteurs depuis le serveur
  getReproducteurs(genre: Genre): Observable<Reproducteur[]> {
    return this.firestore.collection('reproducteurs', repro => repro.where('genre', '==', genre)).valueChanges().pipe(
      map( (reproducteurs: Reproducteur[]) => reproducteurs.map(p => new Reproducteur().deserialize(p))));
  }

  // recuperer une seule reproducteur avec son id
  getSingleReproducteur(id: number) {
    // TODO
  }

  // mise a jour
  updateReproducteur(reproducteur: Reproducteur){
    delete reproducteur.id;
    this.firestore.doc('reproducteurs/' + reproducteur.id).update(reproducteur);
  }

  // creation d une nouvelle reproducteur
  createNewReproducteur(newReproducteur: Reproducteur) {
    return this.firestore.collection('reproducteurs').add(newReproducteur);
  }


  // suppression d une reproducteur
  removeReproducteur(reproducteurId: string) {
    this.firestore.doc('reproducteurs/' + reproducteurId).delete();
  }
}
