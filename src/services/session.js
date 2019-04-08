/* global ENDPOINT */
import http from './http';
import TokenService from './token';

export default class UserService {
    static fetchCurrent() {
        return http.get(`${ENDPOINT}api/users/current`);
    }

    static async fetchLogin(username, password) {
        const {token, user} = await http.post(`${ENDPOINT}auth/login`, {username, password});
        TokenService.setToken(token);
        return user;
    }

    static async fetchExternalLogin({
        id, name, surname, email, image
    }) {
        const {token, user} = await http.post(`${ENDPOINT}auth/externalLogin`, {
            id, name, surname, email, image
        });
        TokenService.setToken(token);
        return user;
    }
}
