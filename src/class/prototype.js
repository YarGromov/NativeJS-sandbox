function DeleteUserAction(userId) {
    this.type = 'DELETE-USER';
    this.payload = {
        userId: userId
    }
}

const action11 = new DeleteUserAction(111111)
const action22 = new DeleteUserAction(222222)

console.log(action11)
console.log(action22)