import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminListing, changePasswordUrl, logoutUrl, profileUrl, updateProfileUrl } from 'src/app/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private _http:HttpClient) { }

  profile(){
    return this._http.get(profileUrl)
  }

  update_profile(_id,data){
    return this._http.post(updateProfileUrl(_id),data)
  }

  change_password(_id,data){
    return this._http.post(changePasswordUrl(_id),data)
  }

  admin_listing(parmas){
    console.log(parmas)
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",parmas.page);
    queryParams = queryParams.append("page",parmas.limit);
    return this._http.get(adminListing,{params:queryParams})
  }

  logout(){
    return this._http.get(logoutUrl)
  }

}
