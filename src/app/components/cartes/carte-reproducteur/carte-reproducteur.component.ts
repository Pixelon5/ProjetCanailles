import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-reproducteur',
  templateUrl: './carte-reproducteur.component.html',
  styleUrls: ['./carte-reproducteur.component.css']
})
export class CarteReproducteurComponent implements OnInit {

  @Input() srcImg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
