import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './Layouts/layouts.module';
import { StudentsPageComponent } from './pages/student-list/student-list.component';
import { StudentModalComponent } from './shared/components/student-modal/student-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    StudentModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutsModule,
   
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
