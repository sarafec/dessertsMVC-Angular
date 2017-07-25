import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Recipe } from './recipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {

	constructor(private http: HttpClient){}

	private recipesUrl = './assets/recipes.json';

	getData(): Observable<Recipe[]>{
		return this.http.get(this.recipesUrl)
			.map(this.extractData);
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw new Error('Bad response status: ' + response.status);
		}
		let body = response;
		return body || { };
	}

}