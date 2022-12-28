import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLigthsService {
  private ligths = new Subject<string>()
  public ligths$ = this.ligths.asObservable ()
  private lastValue: string | null = 'verde'


  constructor() { 
    interval(2000).subscribe(()=> this.lastValue === 'Griffyndor - Slytherin' ? this.ligths.next('Ravenclaw - Hufflepuff') : this.ligths.next('Griffyndor - Slytherin'))
    this.ligths.subscribe((valor) => (this.lastValue = valor))
  }
 }


