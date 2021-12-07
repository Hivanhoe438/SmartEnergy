import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private_link = 'https://developer.nrel.gov/api/pvwatts/v6.json';

  constructor(private http: HttpClient) {
  }

  get() {
    const args = '?system_capacity=5&module_type=0&losses=20&array_type=0&tilt=0&azimuth=0&api_key=cztDiy335GgAs0cvdzCIGVIRkgFBjQDH8uvzxc3L&lon=-74.005941&lat=40.712784';
    return this.http.get(this.private_link + args);
  }

}
