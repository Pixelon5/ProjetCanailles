import { Component, OnInit, Input } from '@angular/core';
import { ChiotService } from '../../services/chiot.service';
import { PorteesService } from '../../services/portees.service';
import { Chiot } from '../../shared/models/chiot.model';
import { Portee } from 'src/app/shared/models/portee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';


import {AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-chiots',
  templateUrl: './chiots.component.html',
  styleUrls: ['./chiots.component.css']
})
export class ChiotsComponent implements OnInit {

  portee: Portee;
  porteeNom: string;
  chiot: Chiot[];
  porteeSubscription: Subscription;

  arrayOfValues: Array<string>;



  firestore: AngularFirestore;
  itemDoc: AngularFirestoreDocument<Portee>;
  item: Observable<Portee>;

  constructor(private route: ActivatedRoute, private chiotService: ChiotService,
              private router: Router, private porteesService: PorteesService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.porteesService.getPortees().subscribe(dbPortees => {
      this.portee = dbPortees[id];
      this.chiot = this.portee.getChiots();
      this.porteeNom = this.portee.getNom();
    });

  }

  onBack() {
    this.router.navigate(['/portees']);
  }


}
