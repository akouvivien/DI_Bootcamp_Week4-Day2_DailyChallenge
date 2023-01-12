import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cpt1Component } from './cpt1/cpt1.component';
import { Cpt2Component } from './cpt2/cpt2.component';
import { Cpt3Component } from './cpt3/cpt3.component';

@NgModule({
  declarations: [
    AppComponent,
    Cpt1Component,
    Cpt2Component,
    Cpt3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
