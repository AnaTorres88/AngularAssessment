import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
	questionData:any;
	check:boolean=false;
  constructor() { }
	
  @Input() question:any;

	checkboxValues(id, i){
		console.log(id,i)
		for(let item of this.questionData.options){
			
			if(this.questionData.options[i]==item && id.check==true){
				this.questionData.selectedAnswer.push(item);
			}
			else if(this.questionData.options[i]==item && id.check==false){
				this.questionData.selectedAnswer.splice(i,1);
			}
		}
	}

  ngOnInit() {
		this.questionData=this.question;
  }

}
