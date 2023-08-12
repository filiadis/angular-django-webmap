import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface AuthTokens {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): Observable<AuthTokens> {
    return this.http
      .post<AuthTokens>(`${environment.apiUrl}api/token/`, {
        username,
        password,
      })
      .pipe(
        tap((tokens) => {
          localStorage.setItem('authTokens', JSON.stringify(tokens));
          this.authTokensSubject.next(tokens);
          this.router.navigate(['home']);
        })
      );
  }

  private authTokensSubject = new BehaviorSubject<AuthTokens | null>(null);
  authTokens$: Observable<AuthTokens> = this.authTokensSubject
    .asObservable()
    .pipe(filter((token) => token !== null)) as Observable<AuthTokens>;

  constructor(private http: HttpClient, private router: Router) {
    const authTokens = localStorage.getItem('authTokens');
    if (authTokens) {
      this.authTokensSubject.next(JSON.parse(authTokens));
    }
  }

  loginUser(username: string, password: string): Observable<AuthTokens> {
    return this.http
      .post<AuthTokens>(`${environment.apiUrl}api/token/`, {
        username,
        password,
      })
      .pipe(
        tap((tokens) => {
          localStorage.setItem('authTokens', JSON.stringify(tokens));
          this.authTokensSubject.next(tokens);
          this.router.navigate(['home']);
        })
      );
  }

  logoutUser() {
    localStorage.removeItem('authTokens');
    this.authTokensSubject.next(null);
    this.router.navigate(['']);
  }

  refreshTokens(refresh: string): Observable<AuthTokens> {
    return this.http
      .post<AuthTokens>(`${environment.apiUrl}api/token/refresh/`, { refresh })
      .pipe(
        tap((newTokens) => {
          localStorage.setItem('authTokens', JSON.stringify(newTokens));
          this.authTokensSubject.next(newTokens);
        })
      );
  }

  getUser() {
    const tokens = this.authTokensSubject.getValue();
    if (tokens) {
      return jwtDecode(tokens.access);
    }
    return null;
  }
}
