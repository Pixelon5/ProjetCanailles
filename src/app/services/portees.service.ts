import { Injectable } from '@angular/core';
import { Portee } from '../shared/models/portee.model';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {combineAll, map, mergeMap, switchMap} from 'rxjs/operators';
import {combineLatest, Observable} from 'rxjs';
import {Chiot} from '../shared/models/chiot.model';

@Injectable({
  providedIn: 'root'
})
export class PorteesService {

  constructor(private firestore: AngularFirestore) {
    this.getPortees();
  }

  portee: Portee[] = [];

   // recuperer la liste des portees depuis le serveur
  getPortees(): Observable<Portee[]> {
    return this.firestore.collection('portees').valueChanges().pipe(
      map( (portees: Portee[]) => portees.map(p => new Portee().deserialize(p))));
  }

  // recuperer une seule portee avec son id
  getSinglePortee(id: number) {
    // TODO
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
