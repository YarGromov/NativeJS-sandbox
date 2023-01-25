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
    {
        name: 'Bob',
        age: 34,
        friends: [
            {name: "Fill"},
            {name: 'Kirill'}
        ]
    },
    {
        name: 'Alex',
        age: 32,
        friends: [
            {name: "Chuck", count: 1},
            {name: 'Norris',count: 2}
        ]
    }
]

const shallowCopyStudents = [...students] //shallow copy

const deepCopyStudents = [{...students[0]},{...students[1]}]


// console.log(students[0] === shallowCopyStudents[0])
// console.log(students === deepCopyStudents)


const deepCopyWithMap = students.map(el=> ({...el}))

deepCopyWithMap[0].name = 'Petuh1'
// console.log(deepCopyWithMap)

//CRUD

const addSt = [...students, {name: 'Oleg', age: 11}]
// console.log(addSt)

const updateBobAge = students.map(el => el.name === 'Bob' ? {...el, age: 35} : el)
// console.log(updateBobAge)

const removeSt = students.filter(el => el.name !== "Bob")
// console.log(removeSt)


const newSt = students.map(st => st.name === 'Alex'
    ? {...st, friends: st.friends.map(f => f.name === 'Chuck' ? {...f, count: 155555} : f)}
    : st
)
console.log(newSt)














