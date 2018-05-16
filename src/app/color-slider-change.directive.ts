import { Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[colorChange]'
})
export class ColorSliderChangeDirective{
	@Input() colorChange:string;
	
  constructor(private el:ElementRef, private renderer:Renderer2) { 

	}
	ngOnInit(){
		let element= this.el.nativeElement;
		let connects= element.querySelector(".noUi-connects").firstChild;
		
		connects.style.background=this.colorChange;
	}

}
