import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private CookieService : CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.CookieService.get('token')
      let newRequest = request;
      newRequest = request.clone(
        {
          setHeaders:{
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest);
    } catch (error) {
      console.log('Ocurrio un error ' , error)
      return next.handle(request);

    }
  }
}
