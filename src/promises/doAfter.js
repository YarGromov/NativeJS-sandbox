const doAfter = (seconds) => {
    let newPromise = new Promise((res, rej) => {
        setTimeout(() => {
            const randValue = Math.random()
            if (randValue > 0.1) {
                res(randValue)
            } else {
                rej(randValue)
            }
        }, seconds * 1000)
    })
    return newPromise
}