import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AccountSharedModule } from '../../account-shared/account-shared.module';
import { PreventKeyModule } from 'src/app/common/prevent-key/prevent-key.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AccountSharedModule,
    PreventKeyModule
  ]
})
export class LoginModule { }
