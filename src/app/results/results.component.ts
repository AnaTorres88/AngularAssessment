import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  	this.displayedResult=this.result;
		this.displayedResultsPage=this.resultsPage;
  }

}
