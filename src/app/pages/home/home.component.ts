import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  usuario: any;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUsuario();
  }

  logout() {
    this.authService.logout();
  }
}
