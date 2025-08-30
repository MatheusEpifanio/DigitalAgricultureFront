import { Injectable } from '@angular/core';
import { LoginRequest } from './model/LoginRequest';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './model/LoginResponse';
import { environment } from '../../../environments/environments.dev';
import { Observable } from 'rxjs';
import { RegisterRequest } from './model/RegisterRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/login`, loginRequest);
  }

  public register(registerRequest: RegisterRequest): Observable<string> {
    return this.httpClient.post<string>( `${this.apiUrl}/auth/register`, registerRequest);
  }
}
