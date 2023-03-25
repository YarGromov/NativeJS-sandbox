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


u111.name = 'Igor1'
console.log(u111.name)
