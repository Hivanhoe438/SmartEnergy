import { DecimalPipe } from "@angular/common";

export class Production {

  system_capacity: DecimalPipe;
  module_type: BigInteger;
  losses: DecimalPipe;
  array_type: BigInteger;
  tilt: DecimalPipe;
  azimuth: DecimalPipe;
  lat: DecimalPipe;
  lon: DecimalPipe;


  constructor(  system_capacity: DecimalPipe, module_type: BigInteger, losses: DecimalPipe, array_type: BigInteger, tilt: DecimalPipe, azimuth: DecimalPipe, lat: DecimalPipe, lon: DecimalPipe) {

      this.system_capacity = system_capacity;
      this.module_type = module_type;
      this.losses = losses;
      this.array_type = array_type;
      this.tilt = tilt;
      this.azimuth = azimuth;
      this.lat = lat;
      this.lon = lon;
  }
}
