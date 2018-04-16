import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
	introData:any=[];

  constructor(private _introData:QuizDataService) { }

  ngOnInit() {
  	this._introData.getQuiz()
		.subscribe(resQuizData => this.introData = resQuizData);
  }
}
