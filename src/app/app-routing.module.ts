import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { HpPagesComponent } from './pages/hp-pages/hp-pages.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [{
   path: '',
   component: DashboardLayoutComponent,

   children: [{
    path: 'students',
    component: HpPagesComponent,
},
{
  path: 'lista',
  component: StudentListComponent,
}
]
},
{
  path: 'main',
  component: MainLayoutComponent,
},
{
  path: '***',
  component: NotFoundComponent,
}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
