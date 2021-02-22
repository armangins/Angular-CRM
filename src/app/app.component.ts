import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAuth:boolean;
  userEmail:string;
  constructor(private authservice:AuthService){

  }

  ngOnInit(){

    this.authservice.getAuth().subscribe(auth=>{

      if(auth){
        this.isAuth = true;
        this.userEmail = auth.email;
      }
    })

  }
  faCoffee = faUser;
  title = 'CRM';
}
