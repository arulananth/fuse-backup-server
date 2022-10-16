import { Injectable } from '@angular/core';

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from './../services/authentication.service'
@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  constructor(private auth:AuthenticationService){

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const tokenAdmin = localStorage.getItem('jep3ss3D');
    let lang=localStorage.getItem('lang'); 
    if(!lang) lang='en';
      if (tokenAdmin) {
      const currentUser = JSON.parse(localStorage.getItem('jep3ss3D'));
      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            'X-localization':lang,
            Authorization: `Bearer ${currentUser.token}`
          }
        });
      }
    }
    if (!tokenAdmin) {
      
       request = request.clone({
          setHeaders: {
            'X-localization':lang,
          }
        });
      
    }
    // if (tokenContest) {
    //   const currentUser = JSON.parse(localStorage.getItem('c3Rzsptt'));
    //   if (currentUser && currentUser.token) {
    //     console.log(currentUser.token);
    //     request = request.clone({
    //       setHeaders: {
    //         Authorization: `token ${currentUser.token}`
    //       }
    //     });
    //   }
    // }
    return next.handle(request).pipe(catchError(err => {
            console.log(err)
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.auth.logout();
                //location.reload(true);
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
  }
}
