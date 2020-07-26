import { Component, OnInit } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-liste-cartes-carroussel',
  templateUrl: './liste-cartes-carroussel.component.html',
  styleUrls: ['./liste-cartes-carroussel.component.css']
})
export class ListeCartesCarrousselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const flkty = new Flickity( '#slider-portee', {
      cellAlign: 'left',
    });
  }

}
