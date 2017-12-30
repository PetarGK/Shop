import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/core.module';
import { RouterEffects } from './core/store/router.effects';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginEffects } from './login/login.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ routerReducer }),
    StoreRouterConnectingModule,
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([RouterEffects, LoginEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
