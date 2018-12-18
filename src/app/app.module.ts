import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
import { environment } from '../environments/environment';

const socketConfig: SocketIoConfig = { url: environment.devApi, options: {} };
// https://www.npmjs.com/package/ng6-socket-io

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        '585530864114-opnef6nb5ljef65ru21hljmthph8c4hq.apps.googleusercontent.com'
      )
    }
  ]);
  return config;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    SharedModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
