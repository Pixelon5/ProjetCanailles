import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReproducteursService} from '../../services/reproducteur.service';
import {Reproducteur} from '../../shared/models/reproducteur.model';
import {Genre, getGenre} from '../../shared/models/enums';

@Component({
  selector: 'app-reproducteurs',
  templateUrl: './reproducteurs.component.html',
  styleUrls: ['./reproducteurs.component.css']
})
export class ReproducteursComponent implements OnInit {

  genre: Genre;
  reproducteurs: Reproducteur[];

  constructor(private route: ActivatedRoute, private reproducteurService: ReproducteursService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = getGenre(params.get('genre'));
      this.reproducteurService.getReproducteurs(this.genre).subscribe(dbRepros => {
        this.reproducteurs = dbRepros;
      });
    });
  }

}
