//This

//!use-strict -----> this = some object
//use-strict -----> this = any data type  ---> Смотрим, как вызывается функция!!!


//============ 1 Global scope============

// console.log(this)
// console.log(this === window)
//
// this.hello = 'hello!'
// console.log(window.hello)
//this.age = 23
// console.log(window.age)


//============ 2 Funtions(not arrow!!!)=========

//1. Ключевое слово new
//2. CALL BIND APPLY
//3. Inside function (not arrow funcion!!!) --->  как именно вызывается функция
//4. Global scope ---> global object(window)

// --- simple call ---> this === undefined (!use strict === window)


// function foo(){
//     console.log(this)
// }
// foo() ---> this === undefined === window
// foo()


// --- вызывается от имени обЪекта ---> this = тому, что слева от точки

// const user = {
//     foo: foo
// }
// user.foo()


// const alex = {
//     name: "Alex",
//     showName(){
//         console.log(this.name)
//     }
// }
// alex.showName()
//
// const hanna = {
//     name: "Hanna",
//     showName: alex.showName
// }
// hanna.showName()

// =================== CALL BIND APPLY ===================
// первый аргумент функции - this
// const alex = {
//     name: "Alex"
// }
//
// const hanna = {
//     name: "Hanna"
// }
//
// function foo(a, b) {
//     console.log(a,b)
//     console.log(this)
// }
// foo.call({name: 'Alexx'})
// foo.call(window)
// foo.call(alex)
// foo.call(hanna)

// foo.call(alex, 1, 2)
// foo.apply(alex, [1,2])
// const fooWrapper = foo.bind(alex)
// fooWrapper()
// foo.bind(alex)()
// foo.bind(alex, 1, 2)()
// foo.bind(alex)(1, 2)
// foo.bind(alex, 1)(2)

// const alex1 = {
//     age: 23,
//     showAge(){
//         console.log(this.age)
//     }
// }
// function foo1(cb){
//     cb()
// }
// foo1(alex1.showAge.bind(alex1))

// setTimeout(alex1.showAge, 1000)
// setTimeout(alex1.showAge.bind(alex1), 1000)
// setTimeout(()=>{alex1.showAge()}, 1000)


//================= new ===============

// function foo(){
//     console.log(this) //this === {}
// }
// new foo()

// function User(name){
//     let newObj = {}
//     newObj.name = name
//     return newObj
// }
// const user = User("New Alex")
// console.log(user)

// function User2(name){
//     this.name = name
// }
// const user2 = new User2("New Alex2")
// console.log(user2)
//
//============ Arrow funtions=========
// this берется из внешнего скоупа

// const foo = () => {
//     console.log(this)
// }
// foo() //window

// const user = {
//     age: 23,
//     showAge(){
//         console.log(this.age)
//     }
// }
// user.showAge() // 23

// const user = {
//     age: 23,
//     showAge: () =>{
//         console.log(this.age)
//     }
// }
// user.showAge() // undefined (стрелка выпрыгивает в глобальное окружение)

// const user = {
//     age: 23,
//     showAge(){
//         const foo = () => {
//             console.log(this)
//         }
//         foo()
//     }
// }
// user.showAge() // this === user

// const user = {
//     age: 23,
//     showAge(){
//         const foo = () => {
//             console.log(this.age)
//         }
//         foo.call({age: 18})
//     }
// }
// user.showAge.call({age: 20}) // 20


// ============ 'use strict' ===========

// в строгом режиме this может быть что угодно
// 'use strict';
// const user = {
//     showAge() {
//         console.log(this)
//     }
// }
// user.showAge.call('Hello') //"Hello"

// в не строгом режиме this всегда объект
// const user = {
//     showAge() {
//         console.log(this)
//     }
// }
// user.showAge.call('Hello') // String{'Hello'}


// ====================== Practice ==============
//
// const user = {
//     group: 'Samurai-1',
//     students: ["Alex", "Hanna"],
//     showGroupUsers(){
//         this.students.forEach((function (student){
//             console.log(this.group + ' ' + student)
//         }).bind(user))
//     }
// }
// user.showGroupUsers()


// function hello() {
//     console.log('Hello', this)
// }

// hello()
// window.hello()

// const person = {
//     name: "Vladilen",
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
// person.sayHello()
// person.sayHelloWindow()
// person.logInfo()

// const lena = {
//     name: 'Elena',
//     age: 23
// }
// person.logInfo.bind(lena)('Amazon', '555-55-55')
// const fnLenaInfoLog = person.logInfo.bind(lena,'Amazon', '555-55-55')
// fnLenaInfoLog()

// person.logInfo.bind(lena, 'Amazon', '555-55-55')()
// person.logInfo.call(lena, 'Amazon', '555-55-55')
// person.logInfo.apply(lena, ['Frontend', '222-22-22'])

// const array = [1, 2, 3, 4, 5]
// function multBy(arr,n) {
//     return arr.map(function(i){
//         return i * n
//     })
// }
//
// console.log(multBy(array, 2))
// Array.prototype.multBy = function (n){
//     return this.map(function(i){
//         return i * n
//     })
// }
// console.log(array.multBy(2))

// Array.prototype.sumBy = function (n){
//     return this.map(el => el + n)
// }
// console.log(array.sumBy(10))
// Array.prototype.divideBy = function (n) {
//     return this.map(el => el / n)
// }
// console.log([10, 20, 30, 40, 50].divideBy(10))














// const b1 = document.querySelector('.b-1')
// b1.onclick = test;
// function test(){
//     this.style.background = 'orange';
// }


