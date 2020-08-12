import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reproducteurs',
  templateUrl: './reproducteurs.component.html',
  styleUrls: ['./reproducteurs.component.css']
})
export class ReproducteursComponent implements OnInit {
  public genre: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre');
      this.genre = this.genre.charAt(0).toUpperCase() + this.genre.substr(1);
    });
  }

}
