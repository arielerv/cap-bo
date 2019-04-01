/* global ENDPOINT */
import http from './http';

export default class StaticDataService {
    static fetch() {
        return http.get(`${ENDPOINT}api/staticData/`);
    }
}
