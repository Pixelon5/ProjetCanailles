import { Component, OnInit, Input } from '@angular/core';
import { Portee } from 'src/app/shared/models/portee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-cartes-portees',
  templateUrl: './liste-cartes-portees.component.html',
  styleUrls: ['./liste-cartes-portees.component.css']
})
export class ListeCartesPorteesComponent implements OnInit {

  @Input() portees: Portee[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewPortee(id: number){
    this.router.navigate(['/portees','view',id]);
  }

}
