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
	question:"do you like cheese?",
	inputType:"checkbox"
	},
	{id:2,
	instructions:"instruction yes",
	question:"Do U dance?!",
	inputType:"radio"
	},
	{id:3,
	instructions:"",
	question:"Do you play Overwatch?",
	inputType:"slider"
	}
	]
	slideDirection:string="next";
	activeSlide:number=0;
	end:boolean=false;
	index:number=0;
	value:string="";
	validate:boolean=false;
	slide:string="";
	transform:number=0;
	slideNext:number=100/this.theQuestions.length;	
	
  constructor() { }

  ngOnInit() {
		this.translate();
  }
	
	/*CAROUSEL FUNCTIONS*/
	translate(){
			return this.transform=0;
		}
	next(){
		this.slideDirection='next';
		this.activeSlide=this.activeSlide+1;
		this.transform=-this.slideNext+this.transform
	 }
	prev(){
		this.slideDirection = 'prev'
		this.transform=+this.slideNext+this.transform
		if(this.activeSlide == 0){
		//Emit a false to showAssessment equals false instead
			this.transform=0;
		} else {
        this.activeSlide--
		}
	}

}
