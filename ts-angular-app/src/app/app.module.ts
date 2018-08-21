import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { LabComponent } from './pages/lab/lab.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogoComponent,
    NavigationBarComponent,
    AboutComponent,
    LabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // App 的 Router
  ],
  providers: [], // service
  bootstrap: [AppComponent] // App 的 root component
})
export class AppModule { }
