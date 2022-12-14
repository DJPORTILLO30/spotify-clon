import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor(private HttpClient: HttpClient , private cookie: CookieService) { }

  sendCredentials(email: string , password: string) : Observable <any> {

    const body = {
      email,
      password
    }

    return this.HttpClient.post(`${this.URL}/auth/login`,body)
  }

}
