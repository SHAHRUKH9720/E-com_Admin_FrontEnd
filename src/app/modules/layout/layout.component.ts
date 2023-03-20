import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: any;
  constructor(
    public dialog:MatDialog,
   private _router:Router
  ) { }

 

  ngOnInit(): void {
  }

  TermsConditon(){
    this._router.navigateByUrl("/layout/termcondition")
  }

}
