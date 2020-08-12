import { Component, OnInit, Input } from '@angular/core';
import * as Flickity from 'flickity';
import { Portee } from 'src/app/models/portee.model'

@Component({
  selector: 'app-liste-cartes-carroussel',
  templateUrl: './liste-cartes-carroussel.component.html',
  styleUrls: ['./liste-cartes-carroussel.component.css']
})
export class ListeCartesCarrousselComponent implements OnInit {

  @Input() portees: Portee[];

  constructor() { }

  ngOnInit(): void {
    const flkty = new Flickity( '#slider-portee', {
      cellAlign: 'left',
    });
    console.log(this.portees);
  }

}
