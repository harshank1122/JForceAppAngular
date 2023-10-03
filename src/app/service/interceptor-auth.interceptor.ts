import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class InterceptorAuthInterceptor implements HttpInterceptor {

  constructor(private login: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.login.getToken();
    
    if (token) {
      // Clone the request and add the token to the headers
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pass the modified request to the next handler
      return next.handle(request);
    }

    // If token doesn't exist, proceed with the original request
    return next.handle(request);
  }

}


