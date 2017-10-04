import { Weather } from './Weather'

export class Airport {
  constructor(){
    this.planes = [];
    this.weather = new Weather();
  }
  getPlanes(){
    return this.planes.length;
  }
  requestPlaneToLand(plane){
    if (this.weather.isBadWeather()){
      throw new Error("sorry, but you can't land due to bad weather")
    }
     plane.flying = false;
     this.planes.push(plane);
  }
  requestPlaneToTakeOff(plane){
    if (this.weather.isBadWeather()){
      throw new Error("sorry, but you can't take off due to bad weather")
    }
      plane.flying = true;
      this.planes.pop(plane);
    }
  }
