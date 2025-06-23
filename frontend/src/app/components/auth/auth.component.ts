import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  username = '';
  password = '';
  isLogin = true;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  submit() {
    if (this.isLogin) {
      this.authService.login(this.username, this.password).subscribe(() => {
        this.router.navigate(['/donate']);
      });
    } else {
      this.authService.register(this.username, this.password).subscribe(() => {
        alert('Registered!');
        this.toggleMode();
      });
    }
  }
}
