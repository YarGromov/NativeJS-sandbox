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


// const doAfter = (seconds) => {
//     let newPromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             const randValue = Math.random()
//             if (randValue > 0.1) {
//                 res(randValue)
//             } else {
//                 rej(randValue)
//             }
//         }, seconds * 1000)
//     })
//     return newPromise
// }
// doAfter(2).then(()=> console.log('result')).catch(()=>console.log('Error'))

// let pr1 = doAfter(1);
//
// pr1
//     .then((n)=>{
//         console.log(n)
//         return n * 1000
//     })
//     .then((n)=>{
//         console.log(n)
//         return n * 1000
//     })
//     .then((n)=>{
//         console.log(n)
//         return n * 1000
//     })
//
// let pr2 = pr1.then((n)=>{
//     console.log("pr1: " + n)
//     return n * 1000
// })
//
// let pr3 = pr2.then((n)=>{
//     console.log("pr2: " + n)
//     return n * 1000
// })
//
//
// let pr4 = pr3.then((n)=>console.log("pr3: " + n))
//
//-------------------------------
// api.sendStudentsCountToItKamasutra(20)
//     .then(res => {
//         console.log(res.data);
//     })
// ----------------------------------------


let msPromise = api.getVacanciesCountFromMicrosoft()
let googlePromise = api.getVacanciesCountFromGoogle()

const allPromise = Promise.all([msPromise, googlePromise])

allPromise.then((res) => {
    let resFromMs = res[0];
    let resFromGoogle = res[1];
    console.log('MAKING REQUEST TO IT-KAMASUTRA')
    return api.sendStudentsCountToItKamasutra(resFromMs + resFromGoogle)
})
    .then(res => {
        console.log('from it-kamasutra: ' + res.data);
    });


// doAfter(1)
//     .then(rand1 => {
//         console.log(rand1)
//         return rand1
//     })
//     .then(rand1 => {
//         console.log(rand1)
//         let pr2 = doAfter(5)
//         return pr2
//     })
//     .then(rand2 => {
//         console.log(rand2)
//         return rand2
//     })
//     .then(rand2 => console.log(rand2))

//------------------------------

// let googlePromise = api.getVacanciesCountFromGoogle()
// googlePromise.then(res => console.log("vacancies from Google: " + res))
//
// let mcPromise = api.getVacanciesCountFromMicrosoft()
// mcPromise.then(res => console.log("vacancies from Microsoft: " + res))

//------------------------------
