import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { CommonTableService } from './service/common-table.service';
import { CommonTableComponent } from './common-table/common-table.component';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports:[
    CommonTableComponent,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers:[CommonTableService]
})
export class CommonTableModule { }
