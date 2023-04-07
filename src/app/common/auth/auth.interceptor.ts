import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastService } from '../toast/toast.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _toast:ToastService,
    private _storageService:StorageService
  ) {}

  tokenvalue

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.tokenvalue = this._storageService.getToken ||''
    return next.handle(request.clone({
      setHeaders:{
        token:this.tokenvalue,
        api_key:"SHAHRUKH"
      }
    })).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access in http Response!')
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            this._storageService.clearStorge()
            this._toast.error(error.error.message)
          }
          else if(error.status === 400) {
            this._toast.error(error.error.message)
          }
          else if(error.status === 404) {
            this._toast.error(error.error.message)
          }
        }
      }));
  }
}
