const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(500, 1500))
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
}

const findUserDB = (id) => {
    const users = [
        {
            id: 1,
            name: 'Yar',
            friend: 3
        },
        {
            id: 2,
            name: 'Olya',
            friend: null
        },
        {
            id: 3,
            name: 'Viktor',
            friend: 2
        }
    ]
    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id == id)
            if (user == null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



findUserDB(1).then(user => {
    console.log(user.name)
})


function getNumber(){
    return  Promise.resolve(Math.random())
}

getNumber().then(num => console.log(`${num} - number 1`))
getNumber().then(num => console.log(`${num} - number 2`))


// async function returnUser(){
//     let user = await findUserDB(1)
//     console.log(user.name)
//     let friend1 = await findUserDB(user.friend)
//     console.log(friend1.name)
//     let friend2 = await findUserDB(friend1.friend)
//     console.log(friend2.name)
// }
// returnUser()


// findUserDB(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => findUserDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)
//         return friend1
//     })
//     .then(friend1 => findUserDB(friend1.friend))
//     .then(friend2 => console.log(friend2))
//     .finally(()=>{console.log('Finish')})



// const friendsPromise = findUserDB(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => findUserDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)
//         return friend1
//     } )
//     .then(friend1 => {
//         const pr = findUserDB(friend1.friend)
//         return pr
//     })
//     .then(friend2 => {
//         console.log(friend2)
//         return friend2.name
//     })
//     .then(friend2Name => console.log(friend2Name))

// let lastPromise = findUserDB(1)
//     .then(user => user.name)
//     .then(name => {
//         console.log('Yaroslav')
//         return 100
//     })
//     .then(number => {
//         console.log(number)
//         return number + 1
//     })
//     .then(number => {
//         console.log(number)
//         return number + 1
//     })
//     .then(number => {
//         console.log(number)
//         return number + 1
//     })
//
// console.log(lastPromise)

// findUserDB(1)
// .then(user=> user.name)
// .then(name=> console.log(name))

// axios.get('https://google.com')
//     .then(res => res.data)
//     .then(data => console.log(data))
//
// const getVacanciesFromGoogle = () => {
//     // const pr = axios.get('https://google.com')
//     // const pr2 = pr.then(res => res.data)
//     // return pr2
//
//    return axios.get('https://google.com')
//         .then(res => res.data)
//        .then(data => data.vacancies)
// }
//
// getVacanciesFromGoogle().then(vacanciesCount => console.log(vacanciesCount))

// const promise1 = axios.get('https://google.com')
// promise1.then((data) => {
//     // console.log(data)
// })

// const promise2 = findUserDB(2)
// promise2
//     .then((user) => {
//         // console.log(user)
//     })
//     .catch(() => {
//         console.warn('Error')
//     })
//
// // const anotherPromise = Promise.all([promise1, promise2])
// const anotherPromise2 = Promise.allSettled([promise1, promise2])
//
// anotherPromise2
//     .then((results) => {
//         // console.log(results)
//         const dataFromGoogle =
//             results[0].status === 'fulfilled'
//                 ? results[0].value
//                 : {data: {vacancies: null}}
//
//         const userFromDB = results[1].status === 'fulfilled'
//             ? results[1].value
//             : {name: results[1].reason}
//
//         // console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
//     })
//     .catch(() => {
//         console.log("Failled")
//     })
//
// const resolvedPromise = Promise.resolve([{count: 1}])
// resolvedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))
//
// const rejectedPromise = Promise.reject({message: 'Some error'})
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))
//
// const usersAPI = {
//     getAllUsers(){
//         return Promise.resolve([{name: 'Dima'}, {name: 'Sveta'}])
//     }
// }
// const pr = usersAPI.getAllUsers();
// pr.then((users)=>{
//     console.log(users)
// })

// anotherPromise
//     .then((results) => {
//         const dataFromGoogle = results[0]
//         const userFromDB = results[1]
//         console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
//     })
//     .catch(() => {
//         console.log("Failled")
//     })
//



// 1.45





