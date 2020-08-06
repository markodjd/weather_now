import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  city: any;

  constructor(private service: WeatherService){}

  ngOnInit(){
    this.recieveCity();
  }

  recieveCity(){
    this.service.cityMessage$.subscribe(data => {
      this.city = data;
    })
  }
}
