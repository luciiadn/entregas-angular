import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';
import { HpPagesComponent } from './hp-pages/hp-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from '../Layouts/dashboard-layout/dashboard-layout.component';



@NgModule({
  declarations: [
    StreetPageComponent,
    HpPagesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ], 
  exports: [
    StreetPageComponent,
    HpPagesComponent,
    DashboardLayoutComponent
    

    ]
})
export class PagesModule { }
