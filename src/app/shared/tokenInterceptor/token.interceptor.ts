import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authSerice: AuthService, private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let jwt = this.authSerice.getToken();
    let reqWithToken = jwt?request.clone({
      setHeaders: {Authorization: "Bearer " + jwt}
    }): request;
    return next.handle(reqWithToken).pipe(
      catchError((httpError: HttpErrorResponse) => {
        console.log(httpError);
        this._snackBar.open(httpError.error, ' X ', {
          duration: 3000, 
          
        })
        return throwError(() => httpError);
      })
    );
  }
}
