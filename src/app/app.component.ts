import { Component } from '@angular/core';
import { QuizDataService } from './quiz-data.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
	appData:any;
  showAssessment:boolean=false;
  surveyCompleted:boolean=false;
  constructor(private _appData:QuizDataService) { }


  ngOnInit() {
  	this.getQuiz();
  }
	getQuiz():void {
  	this._appData.getQuiz()
		.subscribe(quiz => this.appData = quiz[0]);
  }
    showAssessmentReceive($event){
    this.showAssessment=$event;
    console.log($event)

  }
}
