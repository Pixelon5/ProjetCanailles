import { Injectable } from '@angular/core';
import { Portee } from '../shared/models/portee.model';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { combineAll, map, mergeMap, switchMap } from 'rxjs/operators';
import { combineLatest, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorteesService {

  portee: Portee[] = [];

  constructor(private firestore: AngularFirestore) {
    this.getPortees();
  }

   // recuperer la liste des portees depuis le serveur
  getPortees(): Observable<Portee[]> {
    return this.firestore.collection('portees').valueChanges().pipe(
      map( (portees: Portee[]) => portees.map(p => new Portee().deserialize(p))));
  }

  // mise a jour
  updatePortee(portee: Portee){
    delete portee.id;
    this.firestore.doc('portees/' + portee.id).update(portee);
}

  // creation d une nouvelle portee
  createNewPortee(newPortee: Portee) {
    return this.firestore.collection('portees').add(newPortee);
  }

  // suppression d une portee
  removePortee(porteeId: string) {
    this.firestore.doc('portees/' + porteeId).delete();
  }

}
