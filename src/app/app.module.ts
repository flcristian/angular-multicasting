import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColdObservableComponent } from './cold-observable/cold-observable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {ReplaySubjectComponent} from './replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdObservableComponent,
    HotObservableComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
