import Person from './Person.js';

class Joe extends Person {

    constructor () {
        Person.call(this);
        this.genre = 'male';
        this.name = 'Joe';
    }
}

export default Joe;
