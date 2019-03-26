import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	/**
	 * 預設菜單清單
	 * @type {Recipe[]}
	 */
	private recipes: Recipe[] = [

	];

	constructor(private shoppingListService: ShoppingListService) { }

	setRecipes(recipes: Recipe[]){
		this.recipes = recipes;
		this.recipesChanged.next(this.getRecipes());
	}

	/**
	 * 獲得菜單, 使用slice是只能獲得copy而不會使用到原件
	 */
	getRecipes() {
		return this.recipes.slice();
	}

	/**
	 * 獲得選擇的單一菜單
	 * @param {number} index [description]
	 */
	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}

	/**
	 * 利用Injectable注入另外一個服務(shoppingListService) 來使用服務
	 * @param {Ingredient[]} ingredients [description]
	 */
	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.getRecipes());
	}

	updateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.getRecipes());
	}

	deleteRecipe(index: number){
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.getRecipes());
	}

}