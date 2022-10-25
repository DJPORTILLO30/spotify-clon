import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private CookieService: CookieService, private router: Router ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean{
    try {
      const token : boolean = this.CookieService.check('token')
      if(token){
        return true
      }else{
        this.router.navigate(['/auth','login'])
        return false

      }
    } catch (error) {
      console.log('Algo salio mal' , error)
      return false
    }
    return true
  }

}
