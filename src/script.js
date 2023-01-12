const axios = {
    _fake(url, data){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let responseData = {
                    text: `${url} loves you`
                };
                if(url.indexOf('it-kamasutra') > 0){
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if(url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0){
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
    post(url, data){
        return this._fake(url, data)
    },
    get(url, data){
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
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let user = users.find(u => u.id == id)
            if (user == null ){
                rej('user not found')
            } else{
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


axios.get('https://google.com').then((data)=>{
    console.log(data)
})

 findUserDB(1).then((user)=>{
    console.log(user)
})