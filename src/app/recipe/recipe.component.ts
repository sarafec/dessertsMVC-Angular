import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, RouterLink } from '@angular/router';
import { Recipe } from '../recipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'recipe-content',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {

	constructor(private recipeService: RecipeService){
	}

	private recipes:Recipe[] = [];
	private selected:any;

	getData() {
		return this.recipeService
			.getData()
			.map((recipes) => {
				this.recipes = recipes;
			})
	}

	matchRecipe(recipeUrl){
		this.getData().subscribe(_ => {;
			for(let i = 0; i < this.recipes.length; i++){
				if(this.recipes[i].url === recipeUrl){
					let selectedRecipe = this.recipes[i];
					this.selected = selectedRecipe;
				}
			}
		})
	}

	//this is a bit hacky -- using a shared service would not rely so heavily on the content of urls, try that
	ngOnInit() {
		let selectedRecipeUrl = window.location.pathname;
		let selectedUrlArr = selectedRecipeUrl.split('/');
		let selectedUrl = selectedUrlArr[2];
		return this.matchRecipe(selectedUrl);

	}
}