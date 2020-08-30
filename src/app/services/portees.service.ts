import { Injectable } from '@angular/core';
import { Portee } from '../shared/models/portee.model';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {map, mergeMap, switchMap} from 'rxjs/operators';
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
  getPortees(): Observable<any[]> {
    return this.firestore.collection('portee').valueChanges().pipe(
      mergeMap( (portees: Portee[]) => {
        return portees.map(portee => {
          return portee.chiots.map(chiot => {
            this.firestore.doc(`chiots/${chiot}`).valueChanges();
          });
        });
      }));
  }

  // recuperer une seule portee avec son id
  getSinglePortee(id: number) {
    // TODO
  }

  // mise a jour
  updatePortee(portee: Portee){
    delete portee.id;
    this.firestore.doc('portee/' + portee.id).update(portee);
}

  // creation d une nouvelle portee
  createNewPortee(newPortee: Portee) {
    return this.firestore.collection('portee').add(newPortee);
  }


  // suppression d une portee
  removePortee(porteeId: string) {
    this.firestore.doc('portee/' + porteeId).delete();
  }
}
