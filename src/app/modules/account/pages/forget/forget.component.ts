import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { message } from 'src/app/constant/message.constant';
import { REGEX } from 'src/app/constant/pattern.constant';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  constructor(
    private _fb:UntypedFormBuilder,
    private _router:Router
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
    this._router.navigateByUrl('/account/resend-email')
  }

}
