import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorChange]'
})
export class ColorSliderChangeDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 
		el.nativeElement.style.color="red";
	}

}
