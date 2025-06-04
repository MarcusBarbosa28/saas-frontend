import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: User = { email: '', senha: '' };
  errorMsg: string = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}
