// string, number, boolean, null, undefined, NaN  --- primitive data types
// array, object, function --- objects

const user = {
    name: 'Bob',
    age: 23
}

const copyUser = {}
copyUser.name = user.name
copyUser.age = user.age

copyUser.age = 22

console.log(user.age)