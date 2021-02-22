import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private fireAuth:AngularFireAuth){}
  canActivate(): Observable<boolean>{
    return this.fireAuth.authState.pipe(map(auth=>{
      if(!auth){
        this.router.navigate(['/login']);

      }else{
        return true;
      }
    }))
  }
}
