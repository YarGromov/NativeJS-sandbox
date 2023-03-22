
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
    console.log("Subscriber 1: " + res)
})

myPromise.then((res)=>{
    console.log("Subscriber 2: " + res)
})


