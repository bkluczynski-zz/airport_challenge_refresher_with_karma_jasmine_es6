import { Weather } from './Weather'
const CAPACITY = 20;

export class Airport {
  constructor(capacity = CAPACITY){
    this.planes = [];
    this.weather = new Weather();
    this.capacity = capacity;
  }
  getPlanes(){
    return this.planes.length;
  }
  requestPlaneToLand(plane){
    if (this.weather.isBadWeather()){
      throw new Error("sorry, but you can't land due to bad weather")
    }

    if (this.planes.length >= this.capacity){
      throw new Error("oh sorry, we can't land your plane at the moment, you have to divert to the nearest airport")
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
