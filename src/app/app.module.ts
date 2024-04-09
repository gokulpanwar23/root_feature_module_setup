import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstRootComponent } from './first-root/first-root.component';
import { SecondRootComponent } from './second-root/second-root.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstRootComponent,
    SecondRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
