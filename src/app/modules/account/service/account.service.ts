import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  forgtoPasswordUrl, signupUrl, singinUrl } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient) { }

  signup(data){
    return this._http.post(signupUrl,data)
  }

  signin(data){
    return this._http.post(singinUrl,data)
  }

  forgotPassword(data){
    return this._http.post(forgtoPasswordUrl,data)
  }

}
