import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RagisterRoutingModule } from './ragister-routing.module';
import { RagisterComponent } from './ragister.component';
import { AccountSharedModule } from '../../account-shared/account-shared.module';


@NgModule({
  declarations: [
    RagisterComponent
  ],
  imports: [
    CommonModule,
    RagisterRoutingModule,
    AccountSharedModule
  ]
})
export class RagisterModule { }
