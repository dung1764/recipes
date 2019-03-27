import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * 執行註冊
   * @param form 
   */
  onSubmit(form: FormGroup){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.singupUser(email, password);
  }

}
