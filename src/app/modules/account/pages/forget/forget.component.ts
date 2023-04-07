import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { message } from 'src/app/constant/message.constant';
import { REGEX } from 'src/app/constant/pattern.constant';
import { AccountService } from '../../service/account.service';
import { ToastService } from 'src/app/common/toast/toast.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(
    private _fb:UntypedFormBuilder,
    private _router:Router,
    private _accountService:AccountService,
    private _toast:ToastService
  ) { }
  forgotForm:UntypedFormGroup
  get frmCtrl() {return this.forgotForm.controls}
  errMsg = message
  ngOnInit(): void {
    this.creatForm()
  }

  creatForm(){
    this.forgotForm = this._fb.group({
      email:['',[Validators.required,Validators.pattern(REGEX.email)]]
    })
  }
  backToLogin(){
    this._router.navigateByUrl('/account/login')
  }

  sendLink(){
    let data = this.forgotForm.value
    this._accountService.forgotPassword(data).subscribe(res=>{
      if(res['code']==200){
        this._toast.success(res['message'])
        this._router.navigateByUrl('/account/resend-email')
      }
    },(err)=>{
      console.log(err)
      this._toast.error(err['error']['message'])
    })
  }

}
