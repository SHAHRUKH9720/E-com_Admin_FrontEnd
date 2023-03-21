import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TermsConditionComponent
  ],
  imports: [
    CommonModule,
    TermsConditionRoutingModule,
    FormsModule,
    RouterModule,
    EditorModule
  ]
})
export class TermsConditionModule { }
