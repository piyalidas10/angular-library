import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';
describe('WeatherService', () => {
  let service: WeatherService;
  beforeEach(() => {
    const httpClientStub = { get: () => ({}) };
    TestBed.configureTestingModule({
      providers: [
        WeatherService,
        { provide: HttpClient, useValue: httpClientStub }
      ]
    });
    service = TestBed.get(WeatherService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('getWeather', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get').and.callThrough();
      service.getWeather();
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
});
