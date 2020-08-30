import { Component, OnInit, Input } from '@angular/core';
import { Portee } from 'src/app/shared/models/portee.model';

@Component({
  selector: 'app-carte-portee',
  templateUrl: './carte-portee.component.html',
  styleUrls: ['./carte-portee.component.css']
})
export class CartePorteeComponent implements OnInit {

  @Input() portee: Portee;

  constructor() { }

  ngOnInit(): void {
    console.log(this.portee);
  }

}
