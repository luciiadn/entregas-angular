import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrafficLigthsService } from 'src/app/services/traffic-ligths.service';

@Component({
  selector: 'app-elementos1',
  templateUrl: './elementos1.component.html',
  styleUrls: ['./elementos1.component.scss']
})
export class Elementos1Component implements OnDestroy {
  lightsSubscription: Subscription;


  constructor (public trafficLightService: TrafficLigthsService) {
    this.lightsSubscription = this.trafficLightService.ligths$.subscribe(console.log)
  }
  
  ngOnDestroy(): void {
    this.lightsSubscription.unsubscribe()


    
  }

}