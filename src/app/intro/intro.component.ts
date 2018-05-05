import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
	introData:any;
  show:boolean=true;
  @Output() showTheAssessment = new EventEmitter<boolean>();


  constructor(private _introData:QuizDataService) { }

  ngOnInit() {
  	this.getQuiz();
  }
  getQuiz():void{
  	this._introData.getQuiz()
  	.subscribe(resintroData => this.introData = resintroData[0]);
  }
  showAssessment() {
   this.showTheAssessment.emit(this.show)
  }
}
