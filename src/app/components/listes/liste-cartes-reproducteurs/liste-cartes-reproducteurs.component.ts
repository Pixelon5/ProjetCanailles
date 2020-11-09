import {Component, Input, OnInit} from '@angular/core';
import {Reproducteur} from '../../../shared/models/reproducteur.model';

@Component({
  selector: 'app-liste-cartes-reproducteurs',
  templateUrl: './liste-cartes-reproducteurs.component.html',
  styleUrls: ['./liste-cartes-reproducteurs.component.css']
})
export class ListeCartesReproducteursComponent implements OnInit {

  @Input() reproducteurs: Reproducteur[];

  constructor() { }

  ngOnInit(): void {
  }

}
