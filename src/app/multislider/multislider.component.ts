import { Component,Input,OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'multislider',
  templateUrl: './multislider.component.html',
  styleUrls: ['./multislider.component.css'],
	encapsulation: ViewEncapsulation.None,


})
export class MultisliderComponent implements OnInit {
	@Input() question:any;
	multisliderConfig:any;
	answer:any;
  constructor() { }

  ngOnInit() {
		this.multisliderConfig={
			connect: [true, false],
			animate:false,
			step:0.01,
			range: {
				'min': 0,
				'max':100
			}
		};
		this.answer=this.question.selectedAnswer;
  }
	changeSlider(slider){
		 	const sum = this.question.options.reduce((sum, val) => sum + val.initial, 0);
			const diff = sum - 100;
			let remainder = 0
			let arr=[];

			for(let i in this.question.options){
      	if(i != slider){ //don't modify the slider which is being dragged
        	let val = this.question.options[i].initial - diff / (this.question.options.length - 1)
          if(val < 0){
          	remainder += val
            val = 0
          }
        	this.question.options[i].initial=val
					
        }
			}
			
			if(remainder){
      	const filteredLength = this.question.options((val, key) => val > 0 && key != slider).length
        for(let i in this.question.options){
        	if(i != slider && this.question.options[i].initial > 0){
           this.question.options[i].initial=(this.question.options[i].initial + remainder / filteredLength)
          }
					
        }

      }
			
			
			
			//convert to rounded values
			for(let i in this.question.options){
				arr.push(Math.round(this.question.options[i].initial))
				this.question.selectedAnswer=arr;
			}

		}
	roundedNum(i) {
	return Math.round(this.question.options[i].initial)
	}
	changeBox(slider,value,e){
		value=Number(value)
			if(value.length>3){
			  value= ""
			}
			if(value==NaN || value > 100 || value < 0){
				value= ""
			}else{
				this.question.options[slider].initial = Math.round(value);
				this.changeSlider(slider)
			}
			
	}


}
