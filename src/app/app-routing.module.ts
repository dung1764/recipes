import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpErrorComponent } from './http-error/http-error.component';

/**
 * 建立路由規則
 * @type {Routes}
 */
const appRoutes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'recipes', component: RecipesComponent, children: [
		{ path: '', component: RecipeStartComponent },
		{ path: 'new', component: RecipeEditComponent },
		{ path: ':id', component: RecipeDetailComponent },
		{ path: ':id/edit', component: RecipeEditComponent }
	] },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'not-found', component: HttpErrorComponent },
	{ path: '**', redirectTo: 'not-found' }
];

/**
 * 路由規則套用輸出使用
 * @param {[RouterModule]}} {	imports [description]
 */
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule{
}