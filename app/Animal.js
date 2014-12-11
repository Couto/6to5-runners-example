class Animal {

    constructor (genre,...args) {
        this.genre = genre;
    }

    run () {
        console.log('The Animal %s is running', this.name);
    }
}

export default Animal;
