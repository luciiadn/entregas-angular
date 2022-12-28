import { Component } from '@angular/core';
import { TrafficLigthsService } from 'src/app/services/traffic-ligths.service';

@Component({
  selector: 'app-elementos2',
  templateUrl: './elementos2.component.html',
  styleUrls: ['./elementos2.component.scss']
})
export class Elementos2Component {

    constructor (public trafficLightService: TrafficLigthsService) {}

}
