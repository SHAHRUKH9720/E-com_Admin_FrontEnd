import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { message } from 'src/app/constant/message.constant';
import { REGEX } from 'src/app/constant/pattern.constant';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private _fb:UntypedFormBuilder
  ) { }
  passwordIcon=true;
  resetFrom:UntypedFormGroup;
  errMsg= message
  get frmCtrl() {return this.resetFrom.controls}

  ngOnInit(): void {
    this.creatForm()
  }

  creatForm(){
    this.resetFrom = this._fb.group({
      password:['',[Validators.required,  Validators.pattern(REGEX.password)]],
      confirm_password:['',[Validators.required,  Validators.pattern(REGEX.password)]]
    })
  }

}
