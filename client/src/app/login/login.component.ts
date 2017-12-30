import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store/app.state';
import * as LoginActions from './login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }


  onSubmit(form: any): void {
    this.store.dispatch(new LoginActions.LoginUser(form.userName, form.password));
  }

  cognitoCallback(err, result) {

  }
}
