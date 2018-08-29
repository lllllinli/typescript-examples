import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { TestObservableDataServiceComponent } from './components/test-observable-data-service/test-observable-data-service.component';
import { TestObserableCounterComponent } from './components/test-obserable-counter/test-obserable-counter.component';

// Service
import { CounterService } from './services/counter.service';
import { InitialCounterInterface } from './interface/initial-counter.interface';
import { ChangeCounterInterface } from './interface/change.counter.interface';
import { PopupComponent } from './components/popup/popup.component';
import { TestPopupComponent } from './components/test-popup/test-popup.component';

import { PopupService } from './components/popup/popup.service';
import { TestSimpleServiceComponent } from './components/test-simple-service/test-simple-service.component';

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
    TestObservableDataServiceComponent,
    TestObserableCounterComponent,
    PopupComponent,
    TestPopupComponent,
    TestSimpleServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // App 的 Router
    BrowserAnimationsModule,
  ],
  providers: [
    CounterService,
    {provide: InitialCounterInterface, useExisting: CounterService},
    {provide: ChangeCounterInterface, useExisting: CounterService},
    PopupService,
  ], // service
  bootstrap: [
    AppComponent
  ], // App 的 root component
  entryComponents: [PopupComponent],
})
export class AppModule { }
