import { Component, OnInit , Input } from '@angular/core';
import { Router, RouterLink, NavigationStart } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'landing-list',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {
	
	private recipes:Recipe[] = [];
	private selected: Recipe;

	constructor( private recipeService: RecipeService, public router: Router ){ }

	getData() {
		return this.recipeService
			.getData()
			.map((recipes) => {
				this.recipes = recipes;
			})
	}

	ngOnInit() {
		this.getData().subscribe(_ => {;
			this.recipes;
		})
	}

	onSelect(recipe: Recipe): void {
		this.selected = recipe;
		this.createRecipeView(recipe);
	}

	createRecipeView(recipe){
		this.router.navigate(['recipe/' + recipe.url]);
	}


}
