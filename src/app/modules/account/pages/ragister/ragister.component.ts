import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { message } from 'src/app/constant/message.constant';
import { REGEX } from 'src/app/constant/pattern.constant';

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
    private _fb:FormBuilder
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
    console.log(this.ragisterForm.value)
  }

}
