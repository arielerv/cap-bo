export default class User {
    _id = null;
    name = '';
    surname = '';
    email = '';
    documentId = '';
    updateAt = '';
    createdAt = '';
    username = '';
    typePassword = 0;

    constructor(obj) {
        Object.assign(this, obj);
    }
}
