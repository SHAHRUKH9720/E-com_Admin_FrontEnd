import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreventKeyDirective } from './prevent-key.directive';



@NgModule({
  declarations: [
    PreventKeyDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PreventKeyDirective
  ]
})
export class PreventKeyModule { }
