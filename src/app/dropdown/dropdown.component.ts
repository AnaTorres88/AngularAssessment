import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
@Input() question:any;
	isOpen:boolean=false;
	isActive:boolean=false;
	toggleHover:string="";
	selectedOption:string="";
	hoverActive:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
		this.isOpen=!this.isOpen;
	}
	chosen(theAnswer){
	this.question.selectedAnswer=this.question.options[theAnswer];
		
	this.selectedOption=this.question.options[theAnswer];
	this.toggle();

	};	
	openedDropdown(){
		return this.isOpen && this.question.options.length<6 ? 'open-few' : this.isOpen && this.question.options.length>6 ? 'open': false;
	}
	dropdownHeader(){
		if(this.isOpen !== false){
			return 'open-container' 
		}else if (this.isOpen == false && 	this.question.selectedAnswer !== '' ){
			return 'chosen-class'
		}
	}
	hover(option){
		this.hoverActive=!this.hoverActive;
		this.toggleHover=option;
	}

	title(){
	if (this.question.selectedAnswer =="" || this.question.selectedAnswer == undefined) {
		return this.question.dropdownTitle;
	} else {
		return this.question.selectedAnswer.option; 
	}
	}
}
