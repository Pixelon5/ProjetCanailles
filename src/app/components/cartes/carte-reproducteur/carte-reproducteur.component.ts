import { Component, OnInit, Input } from '@angular/core';
import {Reproducteur} from '../../../shared/models/reproducteur.model';

@Component({
  selector: 'app-carte-reproducteur',
  templateUrl: './carte-reproducteur.component.html',
  styleUrls: ['./carte-reproducteur.component.css']
})
export class CarteReproducteurComponent implements OnInit {

  @Input() reproducteur: Reproducteur;

  constructor() { }

  ngOnInit(): void {
  }

}
