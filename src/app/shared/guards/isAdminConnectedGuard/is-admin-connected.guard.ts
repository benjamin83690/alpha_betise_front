import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/authService/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsAdminConnectedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin!: any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.exctractKeyJwt("role") == "ADMIN") {
      return true;
    }
    return this.router.navigate(['/interdit']);
  }
}
