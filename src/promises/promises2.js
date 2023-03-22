
let myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
      resolve()
  },2000)
    console.log(1)
    console.log(2)
    console.log(3)
})
console.log(myPromise)

myPromise.then(()=>{
    console.log("My promise was resolved")
})

