import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AboutComponent } from '../pages/about/about.component';
import { LabComponent } from '../pages/lab/lab.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'lab', component: LabComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
