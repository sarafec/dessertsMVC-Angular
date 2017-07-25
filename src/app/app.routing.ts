import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'recipe/:id', component: RecipeComponent },
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	},
	{ path: "**", redirectTo: '', pathMatch: 'full', component: LandingComponent }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [LandingComponent, RecipeComponent];