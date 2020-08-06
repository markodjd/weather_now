import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/City';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  city: City;
  error: any;

  params: any = {
    q: '',
    lat: '',
    lon: '',
    appid: 'e5b523c892a9fc96bb731f09fb6c8a27',
    units: 'metric',
  };

  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.getLocationWeather();
  }

  getCityWeather() {
    this.service.getCity(this.params).subscribe(
      (data) => {
        this.city = data;
        this.service.sendMessage(this.city);
      },
      (error) => {
        this.error = error;
        this.service.sendError(this.error);
      }
    );
  }

  fetchCity(event) {
    this.params.q = event.target.value;
    this.getCityWeather();
    event.target.value = '';
  }

  getLocationWeather() {
    if (navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.params.lat = position.coords.latitude;
        this.params.lon = position.coords.longitude;

        this.getCityWeather();
      });
    }
  }
}
