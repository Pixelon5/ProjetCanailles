import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChiotService } from '../../services/chiot.service';
import { Chiot } from '../../shared/models/chiot.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chiots',
  templateUrl: './chiots.component.html',
  styleUrls: ['./chiots.component.css']
})
export class ChiotsComponent implements OnInit, OnDestroy {

  chiot: Chiot[];
  chiotSubscription: Subscription;

  constructor(private chiotService: ChiotService, private router: Router) { }

  ngOnInit() {
    this.chiotSubscription = this.chiotService.chiotSubject.subscribe(
      (chiot: Chiot[]) => {
        this.chiot = chiot;
      }
    );
    this.chiotService.emitChiot();
  }

  onNewChiot(){
    this.router.navigate(['/chiot', 'new']);
  }

  onDeleteChiot(chiot: Chiot) {
    this.chiotService.removeChiot(chiot);
  }

  onViewChiot(id: number){
    this.router.navigate(['/chiot', 'view', id]);
  }

  ngOnDestroy(){
    this.chiotSubscription.unsubscribe();
  }

}
