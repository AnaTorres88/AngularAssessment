import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
	questionData:any;
	
	@Input() question:any;
  constructor() { }
	radioValues(id, i){
		for(let item of this.questionData.options){
			if(this.questionData.options[i]==item){
				this.questionData.selectedAnswer=item
			}

		}
	}

  ngOnInit() {
		this.questionData=this.question;
  
  }
	
}
