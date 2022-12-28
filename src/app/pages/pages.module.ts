import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';
import { HpPagesComponent } from './hp-pages/hp-pages.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StreetPageComponent,
    HpPagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ], 
  exports: [
    StreetPageComponent,
    HpPagesComponent
  ]
})
export class PagesModule { }
