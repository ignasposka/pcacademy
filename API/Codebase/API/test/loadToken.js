const request = require('request');

module.exports = (callback) => {
    const options = {
        method: 'POST',
        url: 'https://ignasposka.eu.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: '{"client_id":"H5Rbt2GpNuQQ8HMfGvgrQJdXn00dTx5J","client_secret":"EAPK8b3NJGXnrKh4ujNYh8vXKcMvLERdlwgR046bFYiMZaaRYGJ0JVgPHNauGv01","audience":"space-saver","grant_type":"client_credentials"}'
    };

    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) {
                reject(err);
            }

            process.env.ACCESS_TOKEN = JSON.parse(body).access_token;
            resolve();
        });
    });
};
