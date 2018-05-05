import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

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
	slide:string="";
	transform:number=0;
	length;
	slideNext;
	results:boolean=true;
	id:number;
	eval:boolean=true;
	toEvaluate:any;
	
 	@Output() evalQuiz = new EventEmitter<any>();
  constructor() { }
	
  ngOnInit() {
		this.translate();
		this.length= this.appData.Quiz.theQuestions.length;
		this.slideNext=100/this.length
		this.id=this.appData.Quiz.Id;
		this.toEvaluate={
		eval:true, quizId:this.id}
  }

	
	/*CAROUSEL FUNCTIONS*/

	translate(){
			return this.transform=0;
		}
	next(){
		this.slideDirection='next';
		this.activeSlide++
		this.transform=-this.slideNext+this.transform
	 }
	prev(){
		this.slideDirection = 'prev'
		this.transform=+this.slideNext+this.transform
		if(this.activeSlide == 0){

			this.transform=0;
		} else {
        this.activeSlide--
		}
	}
	validate(){
		if(this.appData.Quiz.theQuestions[this.activeSlide].selectedAnswer !== null &&  this.appData.Quiz.theQuestions[this.activeSlide].selectedAnswer.length !== 0 &&  this.appData.Quiz.theQuestions[this.activeSlide].selectedAnswer.length !== ""){
				return false;
			}else{
					return true;
		}
	 }
	evaluateQuiz(){
		this.evalQuiz.emit(this.toEvaluate);
	}
}
