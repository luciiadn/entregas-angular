import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Elementos1Component } from './components/elementos1/elementos1.component';
import { Elementos2Component } from './components/elementos2/elementos2.component';
import { Elementos3Component } from './components/elementos3/elementos3.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HpPagesComponent } from '../pages/hp-pages/hp-pages.component';
import { StreetPageComponent } from '../pages/street-page/street-page.component';
import { LayoutsModule } from '../Layouts/layouts.module';
import { DashboardLayoutComponent } from '../Layouts/dashboard-layout/dashboard-layout.component';





@NgModule({
  declarations: [
    Elementos1Component,
    Elementos2Component,
    Elementos3Component,
    
    
    
  ],
  imports: [
    CommonModule,
    HpPagesComponent,
    StreetPageComponent,
    

    
  ],
  exports: [
    Elementos1Component,
    Elementos2Component,
    Elementos3Component,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    
    

  ]
})
export class SharedModule { }
