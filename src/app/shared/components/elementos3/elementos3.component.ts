import { Component } from '@angular/core';
import { TrafficLigthsService } from 'src/app/services/traffic-ligths.service';

@Component({
  selector: 'app-elementos3',
  templateUrl: './elementos3.component.html',
  styleUrls: ['./elementos3.component.scss']
})
export class Elementos3Component {
  constructor (public trafficLightService: TrafficLigthsService) {}

}
