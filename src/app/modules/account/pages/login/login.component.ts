import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { message } from 'src/app/constant/message.constant';
import { REGEX,  } from 'src/app/constant/pattern.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private _router:Router
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
    console.log('form value ',this.loginForm.value);
  }
  forgotNavigate(){
    this._router.navigateByUrl("/account/forgot");
  }

}
