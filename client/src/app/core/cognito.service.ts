import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  AuthenticationDetails,
  CognitoIdentityServiceProvider,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import { CognitoResult } from './cognito.result';

@Injectable()
export class CognitoService {

  constructor() {
  }


  public authenticateUser(user, password) {
    const authenticationData = {
        Username : user,
        Password : password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const poolData = {
        UserPoolId : environment.userPoolId,
        ClientId : environment.clientId
    };

    const POOL_KEY = `cognito-idp.${environment.region}.amazonaws.com/${environment.userPoolId}`;

    const userPool = new CognitoUserPool(poolData);

    const userData = {
        Username : user,
        Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);

    const promise = new Promise<CognitoResult>((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          const cognitoGetUser = userPool.getCurrentUser();
          if (cognitoGetUser != null) {
            // tslint:disable-next-line:no-shadowed-variable
            cognitoGetUser.getSession(function(err, result) {
              if (result) {
                const jwtToken = result.getIdToken().getJwtToken();
                console.log('JWT Token: ' + jwtToken);
                resolve(new CognitoResult(jwtToken, null));
              }
            });
          }
        },
        onFailure: function(err) {
          reject(new CognitoResult(null, err));
        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
          userAttributes.email = 'petar.korudzhiev@gmail.com';
          cognitoUser.completeNewPasswordChallenge('P@ssword1111', userAttributes, this);
        }
      });
    });
    return promise;
  }
}
