import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router'
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  error: boolean = false;
  errorMessage;

  constructor(private router:Router,private auth:AuthService) {}

  ngOnInit(): void {

    this.auth.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  onSubmit({valid,value}){
    if(valid){
      this.auth.login(value.email,value.password).then(res=>{
        this.router.navigate(['/'])
      }
      ).catch(error=>{
        this.error = true;
        this.errorMessage = 'Ops somthing went wrong please check email and password'
        
      })
     
    }
    
    
    
  }
}
