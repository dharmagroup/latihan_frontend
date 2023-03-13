import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogined: boolean = false;
  constructor(
    private router: Router
  ) { 
    
    localStorage.setItem('isLogined', 'true');
    if(localStorage.getItem('isLogined') == 'true'){
      this.isLogined = true;
    }
    else{
      this.isLogined = false;
    }
  }

  canActivate() {
    if(this.isLogined == true) {
      return true;
    }   
    else{
      this.router.navigate(['sessions/signin'])
    }
  }

}
