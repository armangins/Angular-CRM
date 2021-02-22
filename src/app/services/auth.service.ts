import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// import { resolve } from 'dns';
import { rejects } from 'assert';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(email,password){

    return new Promise((resolve,reject)=>{
      this.fireAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData=>resolve(userData),
      err=>reject(err));
    })

  }

  getAuth(){
    return this.fireAuth.authState.pipe(map(auth=>auth));
  }

  logOut(){

    this.fireAuth.auth.signOut();

  }
}
