import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
	questionData:any;
  constructor() { }
	
  @Input() question:any;
	
	checkboxValues(id, i){
		for(let item of this.questionData.options){
			if(this.questionData.options[i]==item && id==true){
				this.questionData.selectedAnswer.push(item);
			}
			else if(this.questionData.options[i]==item && id==false){
				this.questionData.selectedAnswer.splice(i,1);
			}
		}
	}

  ngOnInit() {
		this.questionData=this.question;
  }

}
