//
// let myPromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//       const randValue = Math.random()
//       resolve(randValue)
//   },2000)
//     console.log(1)
//     console.log(2)
//     console.log(3)
// })
// console.log(myPromise)
//
// myPromise.then((res)=>{
//     console.log("Subscriber 1: " + res)
// })
//
// myPromise.then((res)=>{
//     console.log("Subscriber 2: " + res)
// })

// const doAfter = (seconds) => {
//   let newPromise =  new Promise((res)=>{
//         setTimeout(()=>{
//             res()
//         }, seconds*1000)
//     })
//     return newPromise
// }

// doAfter(5).then( () => console.log('я сработал через 5 секунд') );
// doAfter(3).then( () => console.log('я сработал через 3 секунд') );
// doAfter(10).then( () => console.log('я сработал через 10 секунд') );

// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );



const doAfter = (seconds) => {
    let newPromise =  new Promise((res, rej)=>{
        setTimeout(()=>{
            const randValue = Math.random()
            if (randValue > 0.5){
                res(randValue)
            } else{
                rej(randValue)
            }
        }, seconds*1000)
    })
    return newPromise
}
doAfter(2).then(()=> console.log('result')).catch(()=>console.log('Error'))
















