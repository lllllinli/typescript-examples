import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AboutComponent } from '../pages/about/about.component';
import { LabComponent } from '../pages/lab/lab.component';
import { NotFoundComponent } from "../pages/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'lab', component: LabComponent },
  { path: '**', component: NotFoundComponent } // 404 page
];

/**
 *
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes ,
      //{ enableTracing: true }
      ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
