import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './Layouts/layouts.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';






@NgModule({
  declarations: [AppComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutsModule,
    MatIconModule,
    MatToolbarModule,
  

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
