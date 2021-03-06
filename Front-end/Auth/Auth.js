import auth0 from 'auth0-js';
import history from '../history';

export default class Auth {
    accessToken;

    idToken;

    expiresAt;

    constructor() {
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.getAccessToken = this.getAccessToken.bind(this);
      this.getIdToken = this.getIdToken.bind(this);
      this.renewSession = this.renewSession.bind(this);
    }

    handleAuthentication() {
      const hashParts = window.location.hash.split('&');
      if(hashParts.length > 0 && hashParts[0]){
        const authResult = {};
        authResult.accessToken = hashParts[0].replace('#access_token=', '');
        authResult.expiresAt = hashParts[1].replace('expires_in=', '');
        authResult.idToken = hashParts[4].replace('id_token=', '');
        this.setSession(authResult);
      }
    }

    getAccessToken() {
      return this.accessToken;
    }

    getIdToken() {
      return this.idToken;
    }

    setSession(authResult) {
      // Set isLoggedIn flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // Set the time that the access token will expire at
      const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
      this.accessToken = authResult.accessToken;
      this.idToken = authResult.idToken;
      this.expiresAt = expiresAt;

      // navigate to the home route
      history.replace('/');
    }

    renewSession(cb = () => {}) {
      this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          cb(true);
        } else if (err) {
          cb(false);
          this.logout();
          console.log(err);
          alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        }
      });
    }

    logout() {
      // Remove tokens and expiry time
      this.accessToken = null;
      this.idToken = null;
      this.expiresAt = 0;

      // Remove isLoggedIn flag from localStorage
      localStorage.removeItem('isLoggedIn');

      // navigate to the home route
      history.replace('/');
    }


    auth0 = new auth0.WebAuth({
      domain: 'ignasposka.eu.auth0.com',
      clientID: '3lI4pT2i3ZqOgTgm0iSGl6upS93k7A3c',
      redirectUri: 'http://localhost:3000/loginCallback',
      responseType: 'token id_token',
      scope: 'openid'
    });

    isAuthenticated() {

      // Check whether the current time is past the
      // access token's expiry time
      const { expiresAt } = this;
      return new Date().getTime() < expiresAt;
    }


    login() {
      this.auth0.authorize();
    }
}
