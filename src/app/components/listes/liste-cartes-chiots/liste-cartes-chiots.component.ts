import { Component, OnInit, Input } from '@angular/core';
import { Chiot } from 'src/app/shared/models/chiot.model';

@Component({
  selector: 'app-liste-cartes-chiots',
  templateUrl: './liste-cartes-chiots.component.html',
  styleUrls: ['./liste-cartes-chiots.component.css']
})
export class ListeCartesChiotsComponent implements OnInit {

  @Input() chiots: Chiot[];

  constructor() { }

  ngOnInit(): void {
  }

}
