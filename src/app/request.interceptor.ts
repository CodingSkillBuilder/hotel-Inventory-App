import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Here is the request: ", request);
    let newRequest: HttpRequest<unknown>;
    switch(request.method) {
      case "POST": {
        newRequest = request.clone(
          {
            headers: new HttpHeaders({'token': 'whooh hooooo this is the new token for POST requests...'}),
          }
        );
        break;
      }
      default: {
        newRequest = request.clone(
          {
            headers: new HttpHeaders({'token': 'whooh hooooo this is the new token for other requests...'}),
          }
        );
        break;
      }
    }

    return next.handle(newRequest);
  }
}
