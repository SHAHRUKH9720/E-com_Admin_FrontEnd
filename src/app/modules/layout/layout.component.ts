import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { menus } from 'src/app/constant/route.constant';
import { LogoutDialogComponent } from './dialog-box/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menus = menus
  constructor(
    public dialog:MatDialog,
   private _router:Router
  ) { }

 

  ngOnInit(): void {
  }

  logout(){
    const dialog = this.dialog.open(LogoutDialogComponent,{
      width:"480px",
      disableClose:true
    });
    dialog.afterClosed().subscribe(data=>{
      console.log(data)
      if(data){
        this.confirmLogout()
      }
    })
  }

  confirmLogout(){
    this._router.navigateByUrl("/account")
  }

}
