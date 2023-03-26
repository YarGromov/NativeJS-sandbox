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

// class User{
//
//     age = 23;
//
//     someFunc = () => {};
//
//     constructor(name) {
//     this.name = name
//     }
//
//     sayHi(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// const user = new User('Anton')
// console.log(user)

//=============
// class Test {
//
//     static DEFAULT_AGE = 'Default'
//     static hi = function (){}
// }
// const test = new Test()
//
// console.log(test.defaultName)  //undefined

// class User {
//     static MAX_LENGTH_NAME  = 20;
//     constructor(name) {
//         if (name.length > User.MAX_LENGTH_NAME){
//             throw new Error('Invalid name')
//         }
//         this.name = name
//     }
// }
// const alex = new User('Alex')
//=============


// =========== PRIVATE FIELD==========
//
// class User {
//     #name;
//     constructor(name) {
//         this.#name = name
//     }
//     getName(){
//         return this.#name
//     }
// }
// const alex = new User('Alex')
// console.log(alex.#name) //error
// console.log(alex.getName())
//===========

//=============GET, SET ==========

// class User {
//     #name;
//     constructor(name) {
//         this.#name = name
//     }
//     getName(){
//         return this.#name
//     }
//     setName(value){
//         return this.#name = value
//     }
// }
//
// const alex = new User('Alex')
//
// console.log(alex.getName())
// console.log(alex.setName('New name'))
// console.log(alex.getName())


// class User {
//     #name;
//     constructor(name) {
//         this.#name = name
//     }
//
//     get name(){
//         console.log('GET')
//         return this.#name
//     }
//
//     set name(value){
//         console.log('SET')
//         return this.#name = value
//     }
// }
//
// const alex = new User('Alex')
//
// alex.name = 'Anton'
// console.log(alex.name)


//======================













