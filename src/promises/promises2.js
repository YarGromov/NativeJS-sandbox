
let myPromise = new Promise((resolve, reject)=>{
    resolve()
    console.log(1)
    console.log(2)
    console.log(3)
})

myPromise.then(()=>{
    console.log("My promise was resolved")
})

