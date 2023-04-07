import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { message } from 'src/app/constant/message.constant';
import { REGEX,  } from 'src/app/constant/pattern.constant';
import { AccountService } from '../../service/account.service';
import { ToastService } from 'src/app/common/toast/toast.service';
import { StorageService } from 'src/app/common/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private _router:Router,
    private _http:HttpClient,
    private _accountService:AccountService,
    private _toast:ToastService,
    private _storageService:StorageService
    ) {
    this.creatForm()
    
   }
  passwordIcon = true
  loginForm:FormGroup;
  get frmCtrl()  { return this.loginForm.controls}
  errMsg=message

  creatForm(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern(REGEX.email)]],
      password:['',[Validators.required,Validators.pattern(REGEX.password)]]
    })
  }
  ngOnInit(): void {
   
    
  }
  onSubmit(){
      let data = this.loginForm.value 

      this._accountService.signin(data).subscribe(res=>{
        if(res['code']==200){
          this._toast.success(res['message'])
          this._storageService.setUserToken(res['token'])
          this._router.navigateByUrl("/layout");
        }
      },
      // (err)=>{
      //   console.log(err)
      //   this._toast.error(err['error']['message'])
      // }
      )
  }
  forgotNavigate(){
    this._router.navigateByUrl("/account/forgot");
  }

}
