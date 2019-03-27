import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router){}

    /**
     * 設定router保護, 確認是否登入
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let isAuthenticated: boolean = this.authService.isAuthenticated();
        // if (!isAuthenticated) {
        //     this.router.navigate(['/shopping-list']);
        // }
        return isAuthenticated;
    }
}