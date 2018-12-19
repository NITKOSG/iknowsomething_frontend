import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { AuthServiceClass } from '../auth.service';
import { response } from 'src/app/shared/response.model';

declare const M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService,
    private loginService: AuthServiceClass,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);
        // if (userData.email.split('@')[1] === 'nitkkr.ac.in') {
        //   this.loginService.login(userData.idToken)
        //     .subscribe((res: response) => {
        //       M.toast({ html: 'Logging you in' });
        //       window.sessionStorage.setItem('token', res.data.token);
        //       this.router.navigate(['auth', 'onboard']);
        //     },
        //       (err) => {
        //         M.toast({ html: err.message });
        //       });
        // } else {
        //   M.toast({ html: 'Please Login With NIT KKR Domain' });
        // }
        this.loginService.login(userData.idToken)
        .subscribe((res: response) => {
          M.toast({ html: 'Logging you in' });
          window.sessionStorage.setItem('token', res.data.token);
          this.router.navigate(['auth', 'onboard']);
        },
          (err) => {
            M.toast({ html: err.message });
          });
      }
    );
  }

}
