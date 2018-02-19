import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ChnageText]'
})
export class ChnageTextDirective {

  constructor(Element: ElementRef) { 
  	console.log(Element);
    Element.nativeElement.innerText="Text is chnaged by directive..";
  }

}
