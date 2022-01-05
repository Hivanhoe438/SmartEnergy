import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
//import { lstat } from 'fs';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private_link = 'https://developer.nrel.gov/api/pvwatts/v6.json';
  // Lat:string = '-77.0368707';
  // Lon:string = '38.9071923';

  constructor(private http: HttpClient) {
  }

  get(Lon:String, Lat:String) {
    const args = this.private_link +  '?system_capacity=5&module_type=0&losses=20&array_type=0&tilt=0&azimuth=0&api_key=cztDiy335GgAs0cvdzCIGVIRkgFBjQDH8uvzxc3L&lon=' +Lon +'&lat=' +Lat
    console.log("http:", args);
    return this.http.get(args).pipe(
      tap(data=>console.log(data))
    );
  }

}
