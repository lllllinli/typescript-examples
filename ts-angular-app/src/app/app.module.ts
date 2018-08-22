import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { LabComponent } from './pages/lab/lab.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TestComponentAndTemplateComponent } from './components/test-component-and-template/test-component-and-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogoComponent,
    NavigationBarComponent,
    AboutComponent,
    LabComponent,
    NotFoundComponent,
    TestComponentAndTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // App 的 Router
  ],
  providers: [], // service
  bootstrap: [AppComponent] // App 的 root component
})
export class AppModule { }
