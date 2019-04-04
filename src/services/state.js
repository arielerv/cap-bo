/* global ENDPOINT */
import http from './http';

const API = `${ENDPOINT}api/state/`;

export default class StateService {
    static find(state) {
        if (!state) {
            return null;
        }
        return http.get(`${API}${state}`);
    }
}
