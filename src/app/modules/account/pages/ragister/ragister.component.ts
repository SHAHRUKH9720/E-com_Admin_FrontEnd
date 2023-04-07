import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { message } from 'src/app/constant/message.constant';
import { REGEX } from 'src/app/constant/pattern.constant';
import { AccountService } from '../../service/account.service';
import { ToastService } from 'src/app/common/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.scss']
})
export class RagisterComponent implements OnInit {
  passwordIcon=true
  ragisterForm:FormGroup;
  errMsg= message
  get frmCtrl() {return this.ragisterForm.controls}
  constructor(
    private _fb:FormBuilder,
    private _accountService:AccountService,
    private _toast:ToastService,
    private _route:Router
  ) { }

  ngOnInit(): void {
    this.creatForm()
  }

  creatForm(){
    this.ragisterForm= this._fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(REGEX.email)]],
      mobile:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern(REGEX.password)]]
    })
  }

  ragister(){
    let data = this.ragisterForm.value
    this._accountService.signup(data).subscribe(res=>{
      if(res['code']==200){
        this._toast.success(res['message']),
        this._route.navigateByUrl("/account")
      }
    })
  }

}
