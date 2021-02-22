import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 @Input() userEmail: string;
 @Input() isAuth;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {

  }

  signOut(event){
    event.preventDefault();
   
    this.auth.logOut();
    window.location.reload();

    
  }
 
}
