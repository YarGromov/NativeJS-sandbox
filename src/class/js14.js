// function User(name){
//     this.name = name
// }
// User.prototype.sayHi = function (){
//     console.log(this.name)
// }
// const user = new User("Alex")
//
// console.log(user)

//class

class User{

    age = 23;

    someFunc = () => {};

    constructor(name) {
    this.name = name
    }

    sayHi(){
        console.log(`Hello ${this.name}`)
    }
}
const user = new User('Anton')
console.log(user)






