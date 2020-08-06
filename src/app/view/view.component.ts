import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  city: any;
  error: any;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.recieveCity();
    this.recieveError();
  }

  recieveCity(){
    this.service.cityMessage$.subscribe(data => {
      this.city = data;
      this.error = null;
    })
  }

  recieveError(){
    this.service.errorMessage$.subscribe(data => {
      this.error = data;
    })
  }

  window(){
    return window;
  }

}
