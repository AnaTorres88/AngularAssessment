import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
theQuestions=[
	{id:1,
	instructions:"instruction yes",
	inputType:"checkbox"
	},
	{id:2,
	instructions:"instruction yes",
	inputType:"radio"
	},
	{id:3,
	instructions:"",
	inputType:"slider"
	}
	]
	slideDirection:string="next";
	activeSlide:number=0;
	end:boolean=false;
	index:number=0;
	value:string="";
	validate:boolean=false;
	slide:string="";;
			
	
  constructor() { }

  ngOnInit() {
  }

}
