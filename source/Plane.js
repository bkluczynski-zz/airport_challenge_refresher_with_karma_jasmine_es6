

export class Plane{
  constructor(){
    this.flying = true;
  }

  isFlying(){
    return this.flying;
  }

  land(airport){
    airport.requestPlaneToLand(this)
  }

  takesOff(airport){
    airport.requestPlaneToTakeOff(this)
  }

}
