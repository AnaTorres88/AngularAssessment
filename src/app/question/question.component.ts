import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	@Input() appData:any;
	slideDirection:string="next";

	activeSlide:number=0;
	end:boolean=false;
	index:number=0;
	value:string="";
	validate:boolean=false;
	slide:string="";
	transform:number=0;
	length;
	slideNext;
  constructor() { }
	
  ngOnInit() {
		this.translate();
		this.length= this.appData.Quiz.theQuestions.length;
		this.slideNext=100/this.length
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
