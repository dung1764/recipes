import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

/**
 * 建立路由規則
 * @type {Routes}
 */
const authRoutes: Routes = [
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
];

/**
 * 路由規則套用輸出使用
 * @param {[RouterModule]}} {	imports [description]
 */
@NgModule({
	imports: [RouterModule.forChild(authRoutes)],
	exports: [RouterModule]
})
export class AuthRoutingModule{
    
}