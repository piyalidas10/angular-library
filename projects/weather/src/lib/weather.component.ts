import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'lib-weather',
  templateUrl:  './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {
  getInfo: any[] = [];
  isLoader: Boolean = true;
  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.weather.getWeather().
    subscribe(
      data => {
        this.getInfo = data;
        console.log('Data:', this.getInfo);
        this.isLoader = false;
      },
      err => console.log(err),
      () => console.log('complete')
    );
  }

}
