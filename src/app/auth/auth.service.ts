import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){}

    /**
     * 註冊帳號
     * @param email 
     * @param password 
     */
    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                (user) => {
                    this.router.navigate(['/'])
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    /**
     * 登入帳號
     * @param email 
     * @param password 
     */
    singInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    /**
     * 登出
     */
    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    /**
     * 獲得通關金鑰
     */
    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    /**
     * 確認是否是登入狀態
     */
    isAuthenticated(){
        return this.token != null;
    }

}