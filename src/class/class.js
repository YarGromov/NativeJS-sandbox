class User {
    constructor(name, site, dob) {
        this.name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }

    hello(){
        this.counter++;
        console.log(`I am ${this.name} from ${this.site}, counter: ${this.counter}`)
    }
}

const u111 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u222 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))


u111.hello()
u111.hello()
