import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {
	questionData:any;

  @Input() question:any;
  constructor() { }
		booleanValues(id, i){
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
