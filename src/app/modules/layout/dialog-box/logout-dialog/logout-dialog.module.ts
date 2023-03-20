import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutDialogComponent } from './logout-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LogoutDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[LogoutDialogComponent]
})
export class LogoutDialogModule { }
