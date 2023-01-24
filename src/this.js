//This

//!use-strict -----> this = some object
//use-strict -----> this = any data type  ---> Смотрим, как вызывается функция!!!



//1. global scope
//2. function (not arrow!!!)




//============Global scope============

// console.log(this)
// console.log(this === window)
//
// this.hello = 'hello!'
// console.log(window.hello)


//============Funtions(not arrow!!!)=========

// function foo(){
//     console.log(this)
// }


// foo()
//
// new foo()
//
// foo.call()
// foo.bind()
// foo.apply()
//
// const user = {
//     foo: foo
// }
//
// user.foo()
//
// const bar = (cb) =>{
//     cb()
// }
//
// bar(foo)













