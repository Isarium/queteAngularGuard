import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

  private userStatus: string;
  constructor(private myService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.userStatus = this.myService.getRole();

      if(this.userStatus === "ADMIN" || this.userStatus === "USER") {
          return true;
      }
      else {
        return false;
      }
  }
  
}
