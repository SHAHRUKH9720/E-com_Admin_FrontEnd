import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private _route:Router) { }

setUserToken(token){
  localStorage.setItem('token',token);

}

get getToken(){
  return localStorage.getItem('token')
}

clearStorge(){
  this._route.navigateByUrl("account")
 return localStorage.clear()
}

}
