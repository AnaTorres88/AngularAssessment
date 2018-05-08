import { Component, Input } from '@angular/core';
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
  sumValues:number=0;
  finished:any;
  quiz:any;
  result:any;

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
  }
	evaluateQuizReceive($event){
	 this.surveyCompleted=$event.eval;
	 this.showAssessment=false;
   this.resultsCalculation()
	
	}
  resultsCalculation() {
   this.getNumericValues(this.appData.Quiz);
   this.displayResult(this.appData);
  }
  getNumericValues(theQuiz) {
  var rounded = [];
  this.sumValues=0;

  for (var i = 0; i < theQuiz.theQuestions.length; i++) {
    if (theQuiz.theQuestions[i].inputType == "multislider") {

      for (var k = 0; k < theQuiz.theQuestions[i].selectedAnswer.length; k++) {
        rounded.push(Number(theQuiz.theQuestions[i].selectedAnswer[k]));
      }
      let highestValue = Math.max.apply(null, rounded);
      let highestIndex = rounded.indexOf(highestValue);
      this.sumValues=this.sumValues + theQuiz.theQuestions[i].options[highestIndex].value;
    }

    if (theQuiz.theQuestions[i].inputType == "openQuestion" && theQuiz.theQuestions[i].selectedAnswer !== "") {
      this.sumValues=this.sumValues + theQuiz.theQuestions[i].value;
      console.log(this.sumValues)
    }
    if (theQuiz.theQuestions[i].inputType == "dropdown" || theQuiz.theQuestions[i].inputType == "radio" || theQuiz.theQuestions[i].inputType == "yesNo" || theQuiz.theQuestions[i].inputType == "slider" && theQuiz.theQuestions[i].selectedAnswer !== "") {
      this.sumValues=this.sumValues + theQuiz.theQuestions[i].selectedAnswer.value
       console.log(theQuiz.theQuestions[i].selectedAnswer.value)
    }

    if (theQuiz.theQuestions[i].inputType == "checkbox" && theQuiz.theQuestions[i].selectedAnswer.length !== 0) {
      var sumCheckbox = 0;
      for (var j = 0; j < theQuiz.theQuestions[i].selectedAnswer.length; j++) {
         console.log(theQuiz.theQuestions[i].selectedAnswer[j].value)
        sumCheckbox += theQuiz.theQuestions[i].selectedAnswer[j].value;
      }
      this.sumValues=this.sumValues + sumCheckbox;
    } else {
      this.sumValues=this.sumValues + 0;
    }
  }
}

  displayResult(finishedQuiz) {
    var resultIndex = 0;
    var score = finishedQuiz.resultsPage.possibleResults;

    while (resultIndex < score.length) {
      if (this.sumValues <= score[resultIndex].score) {

        this.finished=finishedQuiz;
       let r = score[resultIndex]
        r.Id = finishedQuiz.Id;
        this.result=r;

      }
      resultIndex++;

    }
  }

}
