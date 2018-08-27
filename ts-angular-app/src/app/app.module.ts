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
import { CounterComponent } from './components/counter/counter.component';
import { TestCustomComponentComponent } from './components/test-custom-component/test-custom-component.component';
import { TestViewChildComponent } from './components/test-view-child/test-view-child.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

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
    CounterComponent,
    TestCustomComponentComponent,
    TestViewChildComponent,
    CounterDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // App 的 Router
  ],
  providers: [], // service
  bootstrap: [AppComponent] // App 的 root component
})
export class AppModule { }
