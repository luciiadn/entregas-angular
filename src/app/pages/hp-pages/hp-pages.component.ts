import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { HpService } from 'src/app/services/hp.service';

@Component({
  selector: 'app-hp-pages',
  templateUrl: './hp-pages.component.html',
  styleUrls: ['./hp-pages.component.scss']
})
export class HpPagesComponent {
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });

  constructor ( private hpService: HpService){
    this.hpService.searchCharacter('Harry Potter').subscribe()

    this.searchControl.valueChanges
    .pipe(
      debounceTime(2000),
    )
    
    .subscribe((value) =>{
      value && this.hpService.searchCharacter(value).subscribe();

    })
  }
    

}
