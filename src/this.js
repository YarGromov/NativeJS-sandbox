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

//=====================

// document.querySelector('.b-1').onclick = function (){
//     console.log(this)
//     this.style.background = 'orange';
//

// document.querySelector('.b-1').addEventListener('click', f1)
//
// function f1(){
//     console.log(this)
//     this.style.background = 'orange';
// }
//
// let p = document.querySelectorAll('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].onclick = f1
// }
//
// class U2 {
//     constructor(model) {
//         this.model = model;
//     }
//     showThis(){
//         console.log(this)
//     }
// }
// const boat = new U2('744')
// const boat2 = new U2('333')
//
// console.log(boat)
// console.log(boat2)
// boat.showThis();
// boat2.showThis();
//
// class YellowSubmarine extends U2 {
//     constructor(model, color) {
//         super(model)
//         this.color = color;
//         console.log(this.model)
//     }
// }
// let b = new YellowSubmarine(666, 'red')
// console.log(b)
// console.log(b.model)
// console.log('Inside the program')
// console.log(this)
// function abc(){
//     console.log('Inside a function')
//     console.log(this)
//     console.log(3+5/2)
//     this.style.background = 'red';
// }
// abc()
// document.querySelector('.lorem').onclick = abc

// const p = document.querySelectorAll('p')
// p.forEach(function (element){
//     element.onclick = abc;
// })
// document.querySelector('p').addEventListener('click', abc)
//
// const p = document.querySelectorAll('p')
// p.forEach(function (element){
//     element.addEventListener('click', abc)
// })


// const b1 = document.querySelector('.b-1')
// const b2 = document.querySelector('.b-2')
// b1.onclick = test;

// function test(){
//     console.log(this)
//     this.style.background = 'orange';
// }

// test()  !!!Error!!!

//Call()
// function.call(context, arg1, arg2)

// test.call(b1) //сразу вызвал функцию, this === b1
// b2.onclick = test;
// b1.onclick = function(){
//     test.call(b2)
// }
// b2.onclick = function(){
//     test.call(b1)
// }
// function test(color, num){
//     console.log(this)
//     console.log(num)
//     this.style.background = color;
// }

// b2.onclick = function(){
//     test.call(b1,'green', 444)
// }
// b1.onclick = function(){
//     test.apply(b2,['blue', 555])
// }

//bind
// let a = test.bind(b1, 'orange', 777);
// let b = test.bind(b2, 'red', 999);
//
// b1.onclick = a;
// b2.onclick = b;

//===============

// function showThis(){
//     console.log(this)
// }
// showThis()
// 'use strict';
// function showThis(a, b){
//     console.log(this)
//     function sum(){
//         console.log(this)
//         return  a + b
//     }
//
//     console.log(sum());
// }
// showThis(4, 5)

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function (){
//         function shout(){
//             console.log(this)
//         }
//         shout()
//     }
// }
// obj.sum()

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + ' ' + surname)
// }
// const user = {
//     name: 'John'
// }
// sayName.call(user, 'Valetovich');
// sayName.apply(user,['Herovich']);
//
// function count(num){
//     return this * num;
// }
// const double = count.bind(2);
// console.log(double(3))
//
//

// 1) Обычная функция: this = window, if 'use strict' - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('.b-1');
// btn.addEventListener('click', function (){
//     console.log(this);
//     this.style.background = 'red';
// })

// const obj = {
//     num: 5,
//     sayNumber: function (){
//         const say = () => {
//             console.log(this.num)
//         };
//         say()
//     }
// }
// obj.sayNumber()
//
// const btn = document.querySelector('.b-1');
//
// btn.addEventListener('click', (e)=> {
//     console.log(this);
//     e.target.style.background = 'red';
// })
//
// const double = a => a * 2;
// console.log(double(5))
// -------------------------------------------------
// function foo(a,b){
//     console.log(this)
//     console.log(a,b)
// }
//
// const user = {
//     name: 'Alex'
// }
// foo.call({name: 'John'}, 1,2)
// foo.apply({name: 'Hanna'},[3,4])

// function foo(a,b){
//     console.log(this)
//     console.log(a,b)
// }
//-------------
// const bindedFoo = foo.bind({name: 'Leroy'})
// bindedFoo()
// foo.bind({name: 'Leroy2'})()
//-------------
// foo.bind({name: 'Hermiona'}, 1,2)()
// foo.bind({name: 'Hermiona2'})(3,4)
// foo.bind({name: 'Hermiona3'},5)(6)

function User(){
    console.log(this)
}
User.bind({myCustomObj: 'Hello'})()
new (User.bind({myCustomObj: 'Hello'}))()




























