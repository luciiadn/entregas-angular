import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';
import { HpPagesComponent } from './hp-pages/hp-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';




@NgModule({
  declarations: [
    StreetPageComponent,
    HpPagesComponent,
    StudentListComponent,
    CoursesPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule, 
    RouterModule,
  ], 
  exports: [
    StreetPageComponent,
    HpPagesComponent,
    StudentListComponent,
    CoursesPageComponent,
    ]
})
export class PagesModule { }
