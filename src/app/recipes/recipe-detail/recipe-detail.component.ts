import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	id: number;

	/**
	 * 構造函數 注入相關服務
	 * @param {RecipeService}  private recipeService [菜單服務]
	 * @param {ActivatedRoute} private route         [路由服務]
	 */
	constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

	ngOnInit(){
		// 訂閱路由參數, 參數有變化會改變資料, 但不會刷新頁面來增加效能
		this.route.params
		.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.recipe = this.recipeService.getRecipe(this.id);
			}
		);
	}

	/**
	 * 將菜單材料加入材料購買清單
	 */
	addToShoppingList(){
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
	}

}
