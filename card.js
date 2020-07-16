class Card {
    constructor(name, cardType, once_per_turn) {
        this.name = '';
    }
    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
        return this._name;
    }
    sayHello() {
        console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
    }
}

class MonsterCard extends Card {
    constructor(name, type)
}