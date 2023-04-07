import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/common/toast/toast.service';
import { REGEX } from 'src/app/constant/pattern.constant';
import { message } from 'src/app/constant/message.constant';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _layoutService:LayoutService,
    private _fb:FormBuilder,
    private _toast:ToastService
    ) { }

  profile:any={}
  profileForm:FormGroup;
  profile_id:any
  passwordResetForm:FormGroup;
  errMsg = message
  passwordIcon=true;
  passwordResetIcon=true
  get frmCtrl() {return this.profileForm.controls}
  get frmCtrlReset() {return this.passwordResetForm.controls}
  ngOnInit(): void {
    this.creatProfileForm();
    this.creatPasswordForm()
    this.getProfile();
  }

  getProfile(){
    this._layoutService.profile().subscribe(res=>{
      this.profile = res['adminProfie'];
      this.profile_id = this.profile._id
      this.profileForm.patchValue(this.profile);
      this.frmCtrl['email'].disable()
    })
  }

  creatProfileForm(){
    this.profileForm = this._fb.group({
      name:[""],
      email:[''],
      mobile:[''],
      role:[''],
      country:['']
    })
  }

  creatPasswordForm(){
    this.passwordResetForm = this._fb.group({
      password:['',[Validators.required,Validators.pattern(REGEX.password)]],
      confirm_password:['',[Validators.required,Validators.pattern(REGEX.password)]]
    })
  }

  edit(){
    this.profileForm.enable()
  }

  updateProfile(){
    this.frmCtrl['email'].enable()
    let formValue = this.profileForm.value;
    this._layoutService.update_profile(this.profile_id,formValue).subscribe((res=>{
      this._toast.success(res['message'])
      this.getProfile()
    }))
  }

  resetPassword(){
    console.log(this.passwordResetForm.value);
    let formValue = this.passwordResetForm.value;
    if(formValue.password !==formValue.confirm_password){
      this._toast.error("Password and Confirm Password are not same")
      return
    }
    else{
      this._layoutService.change_password(this.profile_id,formValue).subscribe(data=>{
        console.log(data)
      })
    }
  }

  cancelEdit(){

  }

}
