import { Injectable } from '@angular/core';
import { Portee } from '../models/portee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    return this.firestore.collection('portee').valueChanges().pipe(
      map(portees => {
        return portees.map(p => {
          return new Portee().deserialize(p);
        })
      })
    );
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
