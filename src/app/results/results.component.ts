import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
@Input() result:any;
@Input() resultsPage:any;
displayedResultsPage:any;
displayedResult:any;
evalValues:any={index:0,completed:true}
@Output() quizReset = new EventEmitter<any>();
	constructor() { }

  ngOnInit() {
  	this.displayedResult=this.result;
		this.displayedResultsPage=this.resultsPage;
  }
	goReset(){
		this.quizReset.emit(this.evalValues);
	}

}
