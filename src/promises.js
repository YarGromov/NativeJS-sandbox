//Promises

// const alex = {
//     askFile(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve('Users')
//                 // reject(new Error('Can not open file'))
//             }, 2000)
//         })
//     }
// }


// const promise = alex.askFile() //state, result - props; methods: then, catch, finally

// promise.then(
//     (result)=>{
//     console.log('Then')
//     console.log(result)
// },
//     (err)=>{
//         console.log('Catch')
//         console.log(err)
//     }
// )

// promise.then((result)=>{
//     console.log('Then')
//     console.log(result)
// })
//
// promise.catch((error)=>{
//     console.log('Catch')
//     console.log(error)
// })
//
// promise.finally(()=>{
//     console.log('Finally')
// })

// Promise chains

// const promise = alex.askFile()
// const promise2 = promise.then((result)=>{console.log(result)})
// promise2.then((result)=>{console.log(result)})

// const alex = {
//     askFile(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 // resolve('Users')
//                 reject(new Error('Can not open file'))
//             }, 2000)
//         })
//     }
// }


// alex.askFile()
//     .then((res)=>{
//         console.log('Then1', res)
//         return 1
//     })
//     .then((res)=>{
//         console.log('Then2', res)
//         return 2
//     })
//     .then((res)=>{
//         console.log('Then3', res)
//     })
//     .then((res)=>{
//         console.log('Then4', res)
//     })

// alex.askFile()
//     .catch(()=>{
//         console.log('Catch')
//     }) //promise
//     .then(()=>{
//         console.log('Then')
//     })

// alex.askFile()
//     .catch(()=>{
//         console.log('Catch')
//         console.log(age)
//     })
//     .then(()=>{
//         console.log('Then')
//     })
//     .then(()=>{
//         console.log('Then1')
//     })
//     .catch(()=>{
//         console.log('Catch1')
//     })

// alex.askFile()
//     .catch(()=>{
//         console.log('Catch')
//         console.log(age)
//     })
//     .catch(()=>{
//         console.log('Catch1')
//     })
//     .then(()=>{
//         console.log('Then')
//     })
//     .then(()=>{
//         console.log('Then1')
//     })
//

// const alex = {
//     askFile(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 // resolve('Users')
//                 reject(new Error('Can not open file'))
//             }, 2000)
//         })
//     }
// }

// alex.askFile()
//     .then(()=>{
//         console.log('Then')
//     })
//     .then(()=>{
//         console.log('Then1')
//         console.log(age)
//     })
//     .catch(()=>{
//         console.log('Catch')
//     })
//     .then(()=>{
//         console.log('Then2')
//     })
//     .then(()=>{
//         console.log('Then3')
//     })
//     .catch(()=>{
//         console.log('Catch1')
//     })

// alex.askFile()
//     .then(()=>{
//         console.log('Then')
//     })
//     .then(()=>{
//         console.log('Then1')
//         console.log(age)
//     })
//     .then(()=>{
//         console.log('Then2')
//     })
//     .then(()=>{
//         console.log('Then3')
//     })
//     .catch(()=>{
//         console.log('Catch1')
//     })

// alex.askFile()
//     .then(()=>{
//         console.log('Then')
//     })
//     .then(()=>{
//         console.log('Then1')
//         console.log(age)
//     })
//     .catch(()=>{
//         console.log('Catch1')
//     })
//     .then(()=>{
//         console.log('Then2')
//     })
//     .then(()=>{
//         console.log('Then3')
//     })


// alex.askFile()
//     .finally(()=>{
//         console.log('Finally')
//         console.log(age)
//     })
//     .catch(()=>{
//         console.log('Catch')
//     })
//     .then(()=>{
//         console.log('Then')
//     })

// const alex = {
//     askFile() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Users')
//                 // reject(new Error('Can not open file'))
//             }, 2000)
//         })
//     }
// }

// alex.askFile()
//     .finally(()=>{
//         console.log('Finally')
//         console.log(age)
//     })
//     .catch(()=>{
//         console.log('Catch')
//     })
//     .then(()=>{
//         console.log('Then')
//     },
//         ()=>{
//             console.log('Then catch')
//         }
//         )
//     .then(()=>{
//         console.log('Then1')
//     })

// alex.askFile()
//     .then(()=>{
//         console.log('Then')
//     })
//     .catch(()=>{
//         console.log('Catch')
//     })
//     .finally(()=>{
//         console.log('Finally')
//     })

// alex.askFile().then((res)=>{
//     console.log(res)
// })
//
// alex.askFile().then((res)=>{
//     console.log(res)
// })
//
// alex.askFile().then((res)=>{
//     console.log(res)
// })


// const promise = alex.askFile()
//
// promise.then((res)=>{
//     console.log(res)
// })
//
// promise.then((res)=>{
//     console.log(res)
// })
//
// promise.then((res)=>{
//     console.log(res)
// })

// const promise = alex.askFile()
//
// promise
//     .then((res) => {
//         console.log(res)
//     })
//     .then((res) => {
//         console.log(res)
//     }) //undefined
//
// promise
//     .then((res) => {
//         console.log(res)
//     })


// ===========================  async/await   ===========================
// const foo = async () => {
//     console.log(age)
//     return 10
// }
// const promise = foo()
// console.log(promise)
// foo()
//     .then(ten => console.log(ten))
//     .catch(e => console.log(e))


// const foo = async () => { //await
//     try {
//         try {
//             const users = await fetch('http::/facebook.com/users')
//         } catch (e) {
//             console.log(e)
//         }
//
//         const user = await fetch('http::/facebook.com/users/1')
//         const books = await fetch('http::/facebook.com/users/1/books')
//         const book = await fetch('http::/facebook.com/users/1/books/2')
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finish')
//     }
// }


// let a = 5;
// a = a * 2;
//
// try {
//     document.querySelector('.test').innerHTML = a;
// } catch(err){
//     console.log(err)
//     console.log('Error')
// } finally {
//     console.log('Program completed')
// }
//
// console.log(a)
// t1()
//
// function t1 (){
//     console.log('Hello')
// }

const delay = (ms) => {
    return new Promise(r => setTimeout(()=> r(), ms))
}

let url = 'https://jsonplaceholder.typicode.com/todos/1';
let urlComments = "https://jsonplaceholder.typicode.com/comments/1"

// function fetchTodos(){
//     console.log('Fetch todo started...')
//      return delay(2000).then(()=>fetch(url))
//     .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => {
//         console.log("Data: ", data)
//     })
//     .catch(e => console.error(e))

async function  fetchAsyncTodos(){
    console.log('Fetch todos started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log("Data: ", data)
    } catch (e){
        console.error(e)
    } finally {
        console.log("Finish")
    }
}
fetchAsyncTodos()

// async function fetchAsyncComments(){
//     console.log('Fetch comments started...')
//     await delay(3000)
//     const resp = await fetch(urlComments)
//     const data = await resp.json()
//     console.log(data)
// }
// fetchAsyncComments()

