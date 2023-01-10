import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    MainLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
    RouterModule,
  ], exports:[
    DashboardLayoutComponent,
  ]

})
export class LayoutsModule { }
