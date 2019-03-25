import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	/**
	 * subject 是Observale類,也是 Observer, 省去Observable.create(observer) 的步驟
	 * @type {Subject}
	 */
	ingredientsChanged = new Subject<Ingredient[]>();

	startedEditing = new Subject<number>();

	/**
	 * 預設材料清單
	 * @type {Ingredient[]}
	 */
	private ingredients: Ingredient[] = [
	new Ingredient('rice', 100),
	new Ingredient('egg', 2),
	];

	/**
	 * 獲得材料清單使用slice是只能獲得copy而不會使用到原件
	 */
	getIngredients(){
		return this.ingredients.slice();
	}

	/**
	 * 獲得單一清單材料
	 * @param index 
	 */
	getIngredinet(index: number){
		return this.ingredients[index];
	}

	/**
	 * 增加單一材料清單
	 * @param {Ingredient} ingredient [description]
	 */
	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.getIngredients());
	}

	/**
	 * 一次增加多樣材料清單, 利用...拆解array
	 * @param {Ingredient[]} ingredients [description]
	 */
	addIngredients(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.getIngredients());
	}

	/**
	 * 
	 * @param index 更新單筆材料資料
	 * @param newIngredient 
	 */
	updateIngredient(index: number, newIngredient: Ingredient){
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.getIngredients());
	}

	/**
	 * 移除單筆材料資料
	 * @param index 
	 */
	removeIngredient(index: number){
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.getIngredients());
	}
}