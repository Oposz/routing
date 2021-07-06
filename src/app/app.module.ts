import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposModule } from './modules/repos/repos.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReposModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
