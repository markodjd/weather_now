export class City {
  id: number;
  state: string;
  description : string;
  temperature: number;
  feels_like: number;
  min_temp: number;
  max_temp: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  date: number;
  country: string;
  sunrise: number;
  sunset: number;
  name: string;
  timezone: number;

  constructor(obj?: any){
    this.id = obj && obj.weather[0].id || null;
    this.state = obj && obj.weather[0].main || '';
    this.description = obj && obj.weather[0].description || '';
    this.temperature = obj && obj.main.temp || null;
    this.feels_like = obj && obj.main.feels_like || null;
    this.min_temp = obj && obj.main.temp_min || null;
    this.max_temp = obj && obj.main.temp_max || null;
    this.pressure = obj && obj.main.pressure || null;
    this.humidity = obj && obj.main.humidity || null;
    this.wind_speed = obj && obj.wind.speed || null;
    this.date = obj && obj.dt || null;
    this.country = obj && obj.sys.country || '';
    this.sunrise = obj && obj.sys.sunrise || null;
    this.sunset = obj && obj.sys.sunset || null;
    this.name = obj && obj.name || '';
    this.timezone = obj && obj.timezone || null;
  }
}