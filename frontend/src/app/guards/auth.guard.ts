import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtUtilService } from '../services/jwt-util.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtUtilService, private router: Router) {}

  canActivate(): boolean {
    if (this.jwt.getToken()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}