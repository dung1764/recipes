import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * 執行登入
   * @param form 
   */
  onSubmit(form: FormGroup){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.singInUser(email, password);
  }
}
