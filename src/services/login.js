/* global fetch AUTH_ENDPOINT */
/**
 * Send login requests to the authorization authority.
 */
export default class LoginService {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }

    async login(username, password) {
        try {
            const response = await fetch(`${AUTH_ENDPOINT}login`, {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify({username, password}),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const {token} = await response.json();
            this.tokenService.setToken(token);
            return token;
        } catch (err) {
            return null;
        }
    }

    static async sendPasswordRecovery(username) {
        try {
            const response = await fetch(`${AUTH_ENDPOINT}passwordRecovery`, {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify({username}),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return await response.json();
        } catch (err) {
            return null;
        }
    }

    static async validateToken(token) {
        try {
            const response = await fetch(`${AUTH_ENDPOINT}resetPassword`, {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify({token}),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return await response.json();
        } catch (err) {
            return null;
        }
    }

    static async resetPassword(id, token, password) {
        try {
            const response = await fetch(`${AUTH_ENDPOINT}resetPassword/${id}`, {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify({token, password}),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return await response.json();
        } catch (err) {
            return null;
        }
    }

    async externalLogin(email, name, surname) {
        try {
            const response = await fetch(`${AUTH_ENDPOINT}externalLogin`, {
                method: 'post',
                credentials: 'same-origin',
                body: JSON.stringify({email, name, surname}),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const {token} = await response.json();
            this.tokenService.setToken(token);
            return token;
        } catch (err) {
            return null;
        }
    }
}
