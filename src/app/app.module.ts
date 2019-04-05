import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngWebsiteListComponent } from './ang-website-list/ang-website-list.component';
import { AngWebsiteEditComponent } from './ang-website-edit/ang-website-edit.component';
import { AngWebsiteNewComponent } from './ang-website-new/ang-website-new.component';


@NgModule({
  declarations: [
    AppComponent,
    AngWebsiteListComponent,
    AngWebsiteEditComponent,
    AngWebsiteNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
