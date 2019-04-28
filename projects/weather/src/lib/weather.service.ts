import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    // To get data in API for both current weather and forecast in Celsius just add units=metric parameter into your API
    return this.http.get
    ('https://api.openweathermap.org/data/2.5/weather?q=Kolkata,india&APPID=6f0d6c7a1c1bb10886b8b2363cc580b2&units=metric');
  }
}
