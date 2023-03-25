class User {
    #name = '';
    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }

    get name(){
        return this.#name
    }

    set name(value){
        if (value === 'Igor') throw new Error('Igor is not allowed name')
        this.#name = value;
    }

    hello(){
        this.counter++;
        console.log(`I am ${this.name} from ${this.site}, counter: ${this.counter}`)
    }
}

const u111 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u222 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))


u111.name = 'Egor'




class Coder extends User{
    constructor(name, site, dob, tech) {
        super(name, site, dob)
        this.tech = tech;
    }

    code(){
        console.log(`I am ${this.name}, here is my ${this.tech} code: var sum = (a,b) => a + b`)
    }

    hello(){
        super.hello();
        console.log('Go away!!! ' + this.name)
    }
}

const coder1 = new Coder('Dimych Coder', 'it-incubator.by', new Date(1988, 1, 2), 'c#')


class Hacker extends Coder{
    constructor(a, b, c, d) {
        super();
        this.tech = 'xxx';
    }
    code(){
        console.log('I will hack everything')
    }
}

const hacker = new Hacker('Artem Hacker', 'it-incubator.by', new Date(1988, 1, 2), 'Python')



let users = [u111, u222, coder1, hacker]

users.forEach(u => u.hello())
















