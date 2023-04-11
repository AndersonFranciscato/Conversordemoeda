import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorMoedaComponent } from './conversor-moeda/conversor-moeda.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorMoedaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
