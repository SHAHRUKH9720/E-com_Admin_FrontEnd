import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<LogoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    this.dialogRef._containerInstance._config.width="480px"
  }

  ngOnInit(): void {
  }
  confirm(){
    this.dialogRef.close(true)
  }

}
