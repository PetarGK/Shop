import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { CognitoService } from './cognito.service';
import { AuthService } from '../core/auth.service';
import { AuthGuardService } from '../core/auth-guard.service';
import { TokenInterceptor } from '../core/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('CognitoIdentityServiceProvider.ocuosoj46qe7ami0b5pjp4ian.petark.idToken');
        },
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [CognitoService, AuthService, AuthGuardService, JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
