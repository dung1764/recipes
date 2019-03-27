import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(
            'https://ng-recipe-book-b73a4.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes()
        );
    }

    getRecipes(){
        const token = this.authService.getToken();
        return this.http.get('https://ng-recipe-book-b73a4.firebaseio.com/recipes.json?auth=' + token)
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