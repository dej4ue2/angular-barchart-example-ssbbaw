import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './barchart/barchart';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartsModule ],
  declarations: [ AppComponent, HelloComponent,BarChartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
