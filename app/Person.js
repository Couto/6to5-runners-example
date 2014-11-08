import Animal from './Animal.js';

class Person extends Animal {

    run () {
        Animal.prototype.run.call(this);
        console.log('The human %s of genre %s is not very fast', this.name, this.genre);
    }

}

export default Person;
