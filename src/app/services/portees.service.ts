import { Injectable } from '@angular/core';
import { Portee } from '../shared/models/portee.model';
import { Chiot } from '../shared/models/chiot.model';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { combineAll, map, mergeMap, switchMap, finalize } from 'rxjs/operators';
import { combineLatest, Observable, Subscription } from 'rxjs';

import firebase from '@firebase/app';
import '@firebase/storage';
import { DataSnapshot } from '@firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PorteesService {

  portee: Portee[] = [];

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
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
    // return this.firestore.collection('portees').add(newPortee);
    return new Promise<Portee> ((resolve, reject) => {
      this.firestore.collection('portees').add({...newPortee}).then(res => {}, err => reject(err));
    });
  }

  // suppression d une portee
  removePortee(porteeId: string) {
    this.firestore.doc('portees/' + porteeId).delete();
  }

  addChiotToPortee(portee: Portee, chiot: Chiot){
    // TODO
  }

  addSeveralChiotToPortee(portee: Portee, chiots: Chiot[]){
    // TODO
  }


  uploadFile(file: File) {
      return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('portees/' + almostUniqueFileName + file.name).put(file);

        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }

}
