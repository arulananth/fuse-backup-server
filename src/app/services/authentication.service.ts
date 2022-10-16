import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
import {Login, Global} from '../models';


@Injectable()
export class AuthenticationService {
  currentUser:any={};
  title:any='Backup server';
  selectedLang:any='en';
  config_url:any;
  config:any={};
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  constructor(private http: HttpClient, private router: Router) { 
     this.config_url=Global;
  }
  check(): any {
    return this.http.post<any>(Global.API_ENDPOINT + '/api/auth/check',{})
     
      .map(res => {
        this.config=res;
      });
    }
  login(email: string, password: string): any {
    return this.http.post<Login>(Global.API_ENDPOINT + '/api/auth/login', { email: email, password: password })
      // .subscribe(res => {
      .map(res => {
        // login successful if there's a token in the response
            localStorage.setItem('jep3ss3D', JSON.stringify(res));
            const time_to_login = Date.now() + (60 * 60); // one week
            localStorage.setItem('timer', JSON.stringify(time_to_login));
            localStorage.setItem("jep3ss3D_token",res.token);
            this.currentUser.name=res.user.profile.first_name;
            this.currentUser.uid=res.user.uuid;
            this.currentUser.email=res.user.email;
            this.loggedIn.next(true);
            return res;
          
      });
  }
  forgotpassword(email: string): any {
    return this.http.post<any>(Global.API_ENDPOINT + '/api/auth/password', { email: email })
      // .subscribe(res => {
      .map(res => {
        // password request successful if there's a token in the response
            
            return res;
          
      });
  }
  ValiadatePasswordService(token: string): any {
    return this.http.post<any>(Global.API_ENDPOINT + '/api/auth/validate-password-reset', { token: token })
      // .subscribe(res => {
      .map(res => {
        // password token successful if there's a token in the response
            
            return res;
          
      });
  }
  ResetPasswordService(post): any {
    return this.http.post<any>(Global.API_ENDPOINT + '/api/auth/reset', post)
      // .subscribe(res => {
      .map(res => {
        // password token successful if there's a token in the response
            
            return res;
          
      });
  }
  logout(): any {
    
    // remove user from local storage to log user out
    localStorage.removeItem('jep3ss3D_token');
    localStorage.removeItem('jep3ss3D');
    localStorage.removeItem('timer');
    this.currentUser={};
    // localStorage.removeItem('c3Rzspt3U');
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }
  public isAuthenticated(): boolean {
    let token = localStorage.getItem('jep3ss3D');
    // Check whether the token is expired and return
    // true or false
    let lang = localStorage.getItem('lang');
    if(lang){
      this.selectedLang=lang;
    }
    else{
      this.selectedLang='en';
      localStorage.setItem("lang","en");
    }
    
    if (token || this.currentUser.name) {
      this.loggedIn.next(true);
      if(!this.currentUser.name)
      {
      this.currentUser=JSON.parse(localStorage.getItem('jep3ss3D'))
      this.currentUser.name=this.currentUser.user.profile.first_name
      this.currentUser.uid=this.currentUser.user.uuid;
      this.currentUser.email=this.currentUser.user.email;
      
      }
      return true;
    } else {
      return false;
    }
  }
  
  
}
