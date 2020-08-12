import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-chiot',
  templateUrl: './carte-chiot.component.html',
  styleUrls: ['./carte-chiot.component.css']
})
export class CarteChiotComponent implements OnInit {

  @Input() srcImg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
