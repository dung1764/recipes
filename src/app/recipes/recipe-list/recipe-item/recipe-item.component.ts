import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	// 接收上一層給的資料(recipe-list.component.html)
	@Input() recipe: Recipe;
	@Input() index: number;

	ngOnInit() {
	}

}
