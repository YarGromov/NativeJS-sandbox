function User1(name, site, dob){
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}

User1.prototype.hello = function(){
    console.log(`I am ${this.name} from ${this.site}`)
}


const u11 = new User1('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u22 = new User1('Artem', 'it-incubator.by', new Date(1989, 10, 12))

// u11.hello()
// u22.hello()

