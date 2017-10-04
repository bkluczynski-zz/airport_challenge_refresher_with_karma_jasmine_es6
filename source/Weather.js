
export class Weather{
  constructor(){
    this.badWeather = false;
  }

  isBadWeather(){
    return this.badWeather = Math.round(Math.random()) === 1 ? true : false
  }

}
