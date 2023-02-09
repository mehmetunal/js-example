export default class GridConfig {

    /**
     * @param {string} [url] gridDataSource url
     * @param {Array<object>} [actions] grid action buttons
     * @param {Array<object>} [columns] grid columns
     * */
    constructor(url, actions, columns) {
        this.url = url;
        this.actions = actions;
        this.columns = columns;
    }

    render() {
        console.log(`${this.url}`)
    }
}

export class DataSourceOption extends Option {
    constructor() {
        super();
    }
    render() {

    }
}

export class Option {
    constructor() {

    }

    optionRender() {

    }
}


export class User {
    name;
    email;
    #password;
    constructor() { }

    #validateEmail(email) {
        // check email is valid or not.
        return true;
    }

    #validatePassword(password) {
        // check password is satisfying the minimum requirements or not.
        return true;
    }
    signUp(name, email, password) {
        let isValidated = false;
        isValidated = this.#validateEmail(email);
        isValidated &&= this.#validatePassword(password);

        if (isValidated) {
            this.name = name;
            this.email = email;
            this.#password = password;
            // add user in your db.
            console.log('User registered successfuly');
        } else {
            console.log('Please enter correct Details!!');
        }
    }

    login(email, password) {
        if (email === this.email && password === this.#password) {
            console.log('Login Successfully');
        } else {
            console.log('Authentication Failed!!');
        }
    }

    #isRegisteredUser(email) {
        // check user is registered or not.
        return true;
    }

    resetPassword(email, newPassword) {
        if (this.#isRegisteredUser(email)) {
            this.#password = newPassword;
            console.log('Operation performed successfully');
        }
        else {
            console.log('No account found!');
        }
    }
};
/*
    https://dev.to/nehal_mahida/oops-in-javascript-with-easy-to-understand-examples-2ppn
    https://www.honeybadger.io/blog/javascript-oop
    https://www.scaler.com/topics/javascript/oops-in-javascript
    https://pages.graphics.cs.wisc.edu/559-sp21/tutorials/oop-in-js-1/
    https://github.com/martinandersen3d/Frontend-REST-API-for-Axios-Using-Object-Oriented-Programming-with-Redux-and-Vuex
    https://github.com/martinandersen3d/Frontend-REST-API-for-Axios-Using-Object-Oriented-Programming-with-Redux-and-Vuex/blob/master/api.js
*/