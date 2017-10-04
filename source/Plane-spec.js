import {Plane} from './Plane'
import {Airport} from './Airport'


describe("Plane", () => {
  let plane;
  let airport;
  beforeEach( () => {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", ["requestPlaneToLand", "requestPlaneToTakeOff"])
  })
  it("lands successfully", () => {
    plane.land(airport)
    expect(airport.requestPlaneToLand).toHaveBeenCalledWith(plane);
  })

  it("takes off immediately", () => {
    plane.takesOff(airport)
    expect(airport.requestPlaneToTakeOff).toHaveBeenCalledWith(plane);
  })
})
