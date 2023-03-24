import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private _toast:ToastrService
  ) { }

  success(msg){
    this._toast.success(msg)
  }
}


