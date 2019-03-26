import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put(
            'https://ng-recipe-book-b73a4.firebaseio.com/recipes.json',
            this.recipeService.getRecipes()
        );
    }

    getRecipes(){
        return this.http.get('https://ng-recipe-book-b73a4.firebaseio.com/recipes.json')
        .pipe(
            map(
                (data: Recipe[]) => {
                    for(let recipe of data){
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return data;
                }
            )
        )
        .subscribe(
            (data:Recipe[]) => {
                console.log(data),
                this.recipeService.setRecipes(data)
            }
        );
    }
}