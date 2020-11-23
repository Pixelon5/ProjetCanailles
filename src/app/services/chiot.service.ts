import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Chiot } from '../shared/models/chiot.model';
import DataSnapShot  = firebase.database.DataSnapshot;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChiotService {

  constructor() {
    this.getChiots();
   }

  chiot: Chiot[] = [];
  chiotSubject = new Subject<Chiot[]>();

  emitChiot(){
    this.chiotSubject.next(this.chiot);
  }

  saveChiot(){
    firebase.database().ref('/chiot').set(this.chiot);
  }


  // recuperer la liste des chiots depuis le serveur
  getChiots(){
    firebase.database().ref('/chiots')
      .on('value', (data: DataSnapShot) => {
        this.chiot = data.val() ? data.val() : [];
        this.emitChiot();
      }
     );
  }

  // recuperer un seul chiot avec son id
  getSingleChiot(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/chiot/' + id).once('value').then(
          (data: DataSnapShot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // creation d un nouveau chiot
  createNewChiot(newChiot: Chiot) {
    this.chiot.push(newChiot);
    this.saveChiot();
    this.emitChiot();
  }


  // suppression d un chiot
  removeChiot(chiot: Chiot) {
    const chiotIndexToRemove = this.chiot.findIndex(
      (chiotEl) => {
        if (chiotEl === chiot) {
          return true;
        }
      }
    );
    this.chiot.splice(chiotIndexToRemove, 1);
    this.saveChiot();
    this.emitChiot();
  }

  uploadFile(file: File) {
      return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('chiots/' + almostUniqueFileName + file.name).put(file);

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
