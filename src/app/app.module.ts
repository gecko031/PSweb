import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import { ChildContentComponent } from './child-content/child-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
