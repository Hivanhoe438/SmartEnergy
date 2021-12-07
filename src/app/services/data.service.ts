import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  baseUrl: string = 'https://developer.nrel.gov';
  endPoint = '/api/pvwatts/v6';

  constructor(private http: HttpClient) { }

  get()
  {
    this.http.get(system_capacity=5&module_type=0&losses=20&array_type=0&tilt=0&azimuth=0&api_key=cztDiy335GgAs0cvdzCIGVIRkgFBjQDH8uvzxc3L&lon=-74.005941&lat=40.712784);
  }
}
