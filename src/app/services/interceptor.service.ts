import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";


// @Injectable({
//   providedIn: 'root'
// })

// export class InterceptorService implements HttpInterceptor {

//   token = null;

//   constructor(private dataService: DataService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {}
// }
