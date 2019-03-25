import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

	/**
	 * 預設菜單清單
	 * @type {Recipe[]}
	 */
	 private recipes: Recipe[] = [
	 new Recipe(
	 	'義大利麵',
	 	'gogogo',
	 	'http://4078.cyberbiz.tw/media/W1siZiIsIjQwNzgvcHJvZHVjdHMvNjgxMzIvXHU3NjdkXHU5MTUyXHU5NzUyXHU5MWFjXHU2ZDc3XHU5YmFlXHU1OTI3XHU5ODJkXzg2Mi5qcGciXSxbInAiLCJ0aHVtYiIsIjYwMHg2MDAiXV0.jpg?sha=04d22b4ba7fae887',
	 	[
	 	new Ingredient('義大利廟條', 1),
	 	new Ingredient('番茄', 2)
	 	]),
	 new Recipe(
	 	'炒飯',
	 	'好好吃!',
	 	'https://pic.pimg.tw/welove0415/1409116639-2782262807_n.jpg',
	 	[
	 	new Ingredient('雞蛋', 2),
	 	new Ingredient('糯米', 5)
	 	])
	 ];

	 constructor(private shoppingListService: ShoppingListService){}

	/**
	 * 獲得菜單, 使用slice是只能獲得copy而不會使用到原件
	 */
	 getRecipes(){
	 	return this.recipes.slice();
	 }

	 /**
	  * 獲得選擇的單一菜單
	  * @param {number} index [description]
	  */
	 getRecipe(index: number){
	 	return this.recipes.slice()[index];
	 }

	/**
	 * 利用Injectable注入另外一個服務(shoppingListService) 來使用服務
	 * @param {Ingredient[]} ingredients [description]
	 */
	 addIngredientsToShoppingList(ingredients: Ingredient[]){
	 	this.shoppingListService.addIngredients(ingredients);
	 }
	 
	}