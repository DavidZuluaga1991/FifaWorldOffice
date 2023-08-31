import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/environment';
import { UserLogin } from '../../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uri = environment.uri;
  constructor(private http: HttpClient) { }

  public login(user: UserLogin): Observable<any> {
    const concatUri = `${this.uri}/login`;
    return this.http.post<any>(concatUri, user);
  }
}
