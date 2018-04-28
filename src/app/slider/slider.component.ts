import { Component,Input,OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
	title:string;
	content:string;
	currentIndex:number;
	options:any;
	selectedOption:string;
	max:number;
	vals:number;
	sliderConfig:any;
	@Input() question:any;
	



  constructor() { }

  ngOnInit() {
		this.options=this.question.options;
		this.max=this.question.options.length;
		this.vals=this.question.options.lengt+1;
		this.sliderConfig = {
		start:0,
		step:1,
		event:"set",
		connect: [true,false],
		range: {
			min: 0,
			max: this.max-1
		},
		pips: {
			mode: 'range',
			density: (100/ this.max-1),
			values: this.vals
		}
		};

}
updateValue(index){
 		 for (let option = 0; option< this.options.length; option++) {
			 if(index==option){
				 this.question.selectedAnswer=this.options[index]
				 this.currentIndex=index;
			 }
		 }
}
labels(labelIndex){
		 for (let i = 0; i< this.question.labels.length; i++) {
			 if(i==labelIndex){
				 this.title=this.question.labels[i].title;
				 this.content=this.question.labels[i].content;
			 }
			this.updateValue(labelIndex)
			}
	 }

}

