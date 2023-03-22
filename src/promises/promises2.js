
let myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
      const randValue = Math.random()
      resolve(randValue)
  },2000)
    console.log(1)
    console.log(2)
    console.log(3)
})
console.log(myPromise)

myPromise.then((res)=>{
    console.log("My promise was resolved: " + res)
    console.log(myPromise)
})



