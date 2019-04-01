/* global ENDPOINT */
import {map} from 'lodash';

import http from './http';
import {User} from '../model';

const API = `${ENDPOINT}api/users/`;

export default class UserService {
    static async fetch() {
        const {users} = await http.get(API);
        return {
            users: map(users, user => new User({...user}))
        };
    }

    static async find(id) {
        const {user} = await http.get(`${API}${id}`);
        return {user: new User(user)};
    }

    static async save(user) {
        if (user._id) {
            return http.put(`${API}${user._id}`, {user});
        }
        return http.post(API, {user});
    }

    static async remove(id) {
        return http.del(`${API}${id}`);
    }
}
