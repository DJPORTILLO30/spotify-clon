import { Router } from '@angular/router';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})
  constructor(private authService: AuthService , private cookie: CookieService , private Router : Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]) ,
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin():void {
    const {email , password} = this.formLogin.value
    this.authService.sendCredentials(email , password)
    .subscribe(responseOk => {
      console.log('Sesion inciada de forma correcta', responseOk)
      const {data} = responseOk
      const {token} = data
      this.cookie.set('token', token , 4, '/')
      this.Router.navigate(['/' , 'tracks'])

    },
    err => {
      console.log('Error de sesion')
    }
    )
  }

}
