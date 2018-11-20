import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { LoginService } from './login.service';

declare const M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService,
    private loginService: LoginService
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
        if (userData.email.split('@')[1] === 'nitkkr.ac.in') {
          this.loginService.login(userData.idToken)
            .subscribe(res => {
              console.log(res);
            });
          M.toast({ html: 'Successfully Logged In' });
        } else {
          M.toast({ html: 'Please Login With NIT KKR Domain' });
        }
      }
    );
  }

}
