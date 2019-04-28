import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherModule { }
