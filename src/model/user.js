export default class User {
    _id = null;
    name = '';
    surname = '';
    email = '';
    updateAt = '';
    createdAt = '';
    username = '';
    typePassword = 0;
    birthDate = '';
    telephone = '';
    mobilePhone = '';
    address = '';
    department = '';
    state = '';

    constructor(obj) {
        Object.assign(this, obj);
    }
}
