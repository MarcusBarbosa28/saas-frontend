import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario: Usuario = { email: '', senha: '' };
  mensagemErro: string = '';

  constructor(private router: Router) {}

  entrar() {
    this.router.navigate(['/dashboard']);
  }
}
