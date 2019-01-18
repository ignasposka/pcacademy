import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
      domain: 'ignasposka.eu.auth0.com',
      clientID: '3lI4pT2i3ZqOgTgm0iSGl6upS93k7A3c',
      redirectUri: 'http://localhost:3000',
      responseType: 'token id_token',
      scope: 'openid'
    });
    
    login() {
      this.auth0.authorize();
    }
}