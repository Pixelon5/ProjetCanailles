import { Component, OnInit, Input } from '@angular/core';
import { Chiot } from 'src/app/shared/models/chiot.model';

@Component({
  selector: 'app-carte-chiot',
  templateUrl: './carte-chiot.component.html',
  styleUrls: ['./carte-chiot.component.css']
})
export class CarteChiotComponent implements OnInit {

  @Input() chiot: Chiot;

  constructor() { }

  ngOnInit(): void {
  }

}
