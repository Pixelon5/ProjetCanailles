import { Component, OnInit, Input } from '@angular/core';
import { Portee } from 'src/app/shared/models/portee.model';

@Component({
  selector: 'app-liste-cartes-carroussel',
  templateUrl: './liste-cartes-carroussel.component.html',
  styleUrls: ['./liste-cartes-carroussel.component.css']
})
export class ListeCartesCarrousselComponent implements OnInit {

  @Input() portees: Portee[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.portees);
  }

}
