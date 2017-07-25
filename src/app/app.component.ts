import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

}