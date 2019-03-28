import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HttpErrorComponent } from './http-error/http-error.component';
import { HomeComponent } from './core/home/home.component';

/**
 * 建立路由規則, 利用loadChildren 建立lazy loading, 按下去才會load 該module提升效能
 * @type {Routes}
 */
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
	{ path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
	{ path: 'not-found', component: HttpErrorComponent },
	{ path: '**', redirectTo: 'not-found' }
];

/**
 * 路由規則套用輸出使用, 並設定預先下載loadChildren模組
 * @param {[RouterModule]}} {	imports [description]
 */
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule{
}