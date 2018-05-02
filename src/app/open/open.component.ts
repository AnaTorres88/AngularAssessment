import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'open-question',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
	
	@Input() question:any;
  constructor() { }

  ngOnInit() {
  }
	hasText(){
		if(this.question.selectedAnswer.length !== 0 && this.question.selectedAnswer !== "" ){
		return true
	}else{
		return false
		}
	}
}
