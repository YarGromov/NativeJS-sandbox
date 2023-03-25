
class DeleteUserAction1 {
    constructor() {
        this.type = 'DELETE-USER';
        this.payload = {
            userId: userId
        }
    }


}

const action111 = new DeleteUserAction1(111111)
const action222 = new DeleteUserAction1(222222)

console.log(action111)
console.log(action222)