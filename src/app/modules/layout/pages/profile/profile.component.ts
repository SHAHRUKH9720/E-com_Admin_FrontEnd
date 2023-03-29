import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  inputDisable=true

  ngOnInit(): void {
  }
  edit(){
    this.inputDisable=false
  }
  cancelEdit(){
    this.inputDisable=true
  }

}
