import {find} from 'lodash';

export default class State {
    departments = null;

    constructor(obj) {
        Object.assign(this, obj);
    }

    getDepartment(id) {
        const department = find(this.departments, d => d._id === id);
        return department ? department.name : null;
    }
}
