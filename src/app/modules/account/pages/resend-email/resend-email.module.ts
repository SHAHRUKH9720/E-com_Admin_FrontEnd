import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResendEmailRoutingModule } from './resend-email-routing.module';
import { ResendEmailComponent } from './resend-email.component';
import { AccountSharedModule } from '../../account-shared/account-shared.module';


@NgModule({
  declarations: [
    ResendEmailComponent
  ],
  imports: [
    CommonModule,
    ResendEmailRoutingModule,
    AccountSharedModule
  ]
})
export class ResendEmailModule { }
