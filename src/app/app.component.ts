import { Component } from '@angular/core';
import { QuizDataService } from './quiz-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
	appData:any=[];

  constructor(private _appData:QuizDataService) { }
  ngOnInit() {
  	this.getQuiz();
  }
	getQuiz():void {
  	this._appData.getQuiz()
		.subscribe(quiz => this.appData = quiz);
  }
}
