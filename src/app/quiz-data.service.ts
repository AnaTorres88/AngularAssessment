import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable() //metadata 
export class QuizDataService {
	private _url: string = "data/quiz-data.json";
  constructor(private _http:Http) { }
  	getQuiz():Observable<any> {
  		return this._http.get(this._url)
  			.map((response:Response) => response.json())
  			.catch((error:any) => {
  				return Observable.throw(error);
  			})
  	}
}