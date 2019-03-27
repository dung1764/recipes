import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';

/**
 * 建立路由規則
 * @type {Routes}
 */
const appRoutes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'recipes', component: RecipesComponent, children: [
		{ path: '', component: RecipeStartComponent },
		{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
		{ path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuardService] },
		{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
	] },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
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