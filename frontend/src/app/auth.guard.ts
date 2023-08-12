import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.authTokens$.pipe(
      take(1),
      map((authTokens) => {
        const isLoggedIn = !!authTokens; // check if authTokens is not null
        if (!isLoggedIn) {
          this.router.navigate(['']);
        }
        return isLoggedIn;
      })
    );
  }
}
