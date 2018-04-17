import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import "rxjs/Rx";

@Injectable() //metadata 
export class QuizDataService {
	private _url: string = "api/quiz";
  constructor(private _http:HttpClient) { }
  /*	getQuiz():Observable<any> {
  		return this._http.get(this._url)
  			.map((response:Response) => response.json())
  			.catch((error:any) => {
  				return Observable.throw(error);
  			})
  	}*/
  		getQuiz():Observable<any> {
  		return this._http.get<any>(this._url)
			}
  	}
