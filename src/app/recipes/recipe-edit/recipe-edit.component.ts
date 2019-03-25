import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  /**
   * 初始化, 訂閱route服務, 即時獲的url參數
   */
  ngOnInit() {
  	this.route.params
  	.subscribe(
  		(params: Params) => {
  			this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
  		}
  	);
  }

  /**
   * 給Html獲得 指定的 formgroup FormArray元素
   */
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  /**
   * 表單送出
   */
  onSubmit(){
    console.log(this.recipeForm.value);
  }

  /**
   * 表單初始化, 看是新增模式還是編輯模式
   */
  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe: Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount)
            })
          );
          
        }
      }
    }
    
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
      ingredients: recipeIngredients
    });
  }
  

}
