import {Component, Input, OnInit} from '@angular/core';
import {Portee} from 'src/app/shared/models/portee.model';
import {Genre} from '../../../shared/models/enums';

@Component({
  selector: 'app-carte-portee',
  templateUrl: './carte-portee.component.html',
  styleUrls: ['./carte-portee.component.css']
})
export class CartePorteeComponent implements OnInit {

  @Input() portee: Portee;

  constructor() { }

  ngOnInit(): void {
  }

  getNbMales(): string {
    const nbMales = this.portee.getNbGenre(Genre.MALE);
    return nbMales ? nbMales + ' mâle' + (nbMales > 1 ? 's' : '') : '';
  }

  getNbFemelles(): string {
    const nbFemelles = this.portee.getNbGenre(Genre.FEMELLE);
    return nbFemelles ? nbFemelles + ' femelle' + (nbFemelles > 1 ? 's' : '') : '';
  }

}
