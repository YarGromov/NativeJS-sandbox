// string, number, boolean, null, undefined, NaN  --- primitive data types
// array, object, function --- objects

const user = {
    name: 'Bob',
    age: 23
}

const copyUser = {}
copyUser.name = user.name
copyUser.age = user.age

const copyUser2 = {...user}


const arr = [1,2,3,4,5]
const copyArr = [...arr]

const students = [
    {name: 'Bob', age: 34},
    {name: 'Alex', age: 32}
]

const shallowCopyStudents = [...students] //shallow copy

const deepCopyStudents = [{...students[0]},{...students[1]}]


console.log(students[0] === shallowCopyStudents[0])
console.log(students === deepCopyStudents)






