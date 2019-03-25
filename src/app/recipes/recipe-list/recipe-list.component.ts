import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {  
  
  /**
   * 菜單array
   * @type {Recipe[]}
   */
  recipes: Recipe[];

/**
 * 構造函數
 * @param {RecipeService}  private recipeService [description]
 * @param {ActivatedRoute} private route         [description]
 * @param {Router}         private router        [description]
 */
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  /**
   * 初始化獲得菜單
   */
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  /**
   * router url 的指定, 需使用相對路徑
   */
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
