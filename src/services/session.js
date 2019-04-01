/* global ENDPOINT */
import http from './http';

export default class UserService {
    static fetchCurrent() {
        return http.get(`${ENDPOINT}api/users/current`);
    }
}
