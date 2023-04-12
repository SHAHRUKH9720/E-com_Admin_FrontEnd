import { Directive, Input } from '@angular/core';
// appPreventKey
@Directive({
  selector: '[prevent-key]',
  host:{
    '(keydown)':'onKeyUp($event)'
  }
})
export class PreventKeyDirective {
  @Input('prevent-key') preventKey;

  onKeyUp($event){
    if(this.preventKey && this.preventKey.includes($event.keyCode)){
      $event.preventDefault()

    }
  }
  constructor() { }

}
