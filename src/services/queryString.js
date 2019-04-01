import {fromPairs, pickBy} from 'lodash';

export default class QueryStringUtilsService {
    static build(entity) {
        const urlParams = new URLSearchParams();
        pickBy(entity, (value, key) => urlParams.append(key, value));
        return `?${urlParams.toString()}`;
    }

    static parse(entity) {
        const urlParams = new URLSearchParams(entity);
        return fromPairs(Array.from(urlParams.entries()));
    }
}
