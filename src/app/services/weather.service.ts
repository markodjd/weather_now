import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { City } from '../models/City';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private cityMessageSource = new Subject();
  cityMessage$ = this.cityMessageSource.asObservable();
  private errorMessageSource = new Subject();
  errorMessage$ = this.errorMessageSource.asObservable();

  constructor(private http: HttpClient) {}

  getCity(params: any): Observable<City> {
    let queryParams = {};

    if(params.q){
      queryParams = {
        params: new HttpParams()
          .set('q', (params && params.q) || null)
          .set('appid', (params && params.appid) || null)
          .set('units', (params && params.units) || null),
      };
    }else if(params.q === ''){
      queryParams = {
        params: new HttpParams()
          .set('lat', (params && params.lat) || null)
          .set('lon', (params && params.lon) || null)
          .set('appid', (params && params.appid) || null)
          .set('units', (params && params.units) || null),
      };
    }

    if (params) {
      return this.http.get(this.baseUrl, queryParams).pipe(
        map((data) => {
          return new City(data);
        })
      );
    }
  }

  sendMessage(obj: any) {
    this.cityMessageSource.next(obj);
  }

  sendError(obj: any){
    this.errorMessageSource.next(obj);
  }
}
