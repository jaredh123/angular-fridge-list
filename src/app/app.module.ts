import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngWebsiteListComponent } from './ang-website-list/ang-website-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AngWebsiteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
