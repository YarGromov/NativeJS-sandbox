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

const alex = {
    askFile(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // resolve('Users')
                reject(new Error('Can not open file'))
            }, 2000)
        })
    }
}


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

alex.askFile()
    .catch(()=>{
        console.log('Catch')
        console.log(age)
    })
    .then(()=>{
        console.log('Then')
    })
    .then(()=>{
        console.log('Then1')
    })
    .catch(()=>{
        console.log('Catch1')
    })
    //promise


//1.23























