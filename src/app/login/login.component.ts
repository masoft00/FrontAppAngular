import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthenticationService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: comment-format
  //Cette methode me permet de se connecter vers mon API
  onLogin(data) {
   this.AuthService.login(data)
  .subscribe(resp => {
   // tslint:disable-next-line: typedef-whitespace
   const jwt = resp.body.token;
   this.AuthService.saveJwtToken(jwt);
  
  }, err => {
  });
  }

  isAdmin(){
      return this.AuthService.isAdmin();
    }

    isUser(){
      return this.AuthService.isAdmin();
    }
}
