import { Component, OnInit } from '@angular/core';
import { PorteesService } from '../../services/portees-service.service';
import { Portee } from '../../models/portee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portees',
  templateUrl: './portees.component.html',
  styleUrls: ['./portees.component.css']
})
export class PorteesComponent implements OnInit {

  portees: Portee[] = [];
  porteeSubscription: Subscription;

  constructor(private porteeService: PorteesService) { }

  ngOnInit() {
    this.porteeService.getPortees().subscribe(dbPortees => {
      this.portees = dbPortees;
    });
  }

}
