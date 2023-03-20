import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TermsConditionComponent
  ],
  imports: [
    CommonModule,
    TermsConditionRoutingModule,
    QuillModule,
    FormsModule
  ]
})
export class TermsConditionModule { }
