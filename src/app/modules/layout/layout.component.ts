import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from './dialog-box/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: any;
  constructor(
    public dialog:MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  ngOnInit(): void {
  }

}
