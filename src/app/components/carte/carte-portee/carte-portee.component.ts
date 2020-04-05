import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-portee',
  templateUrl: './carte-portee.component.html',
  styleUrls: ['./carte-portee.component.css']
})
export class CartePorteeComponent implements OnInit {

  @Input() srcImg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
