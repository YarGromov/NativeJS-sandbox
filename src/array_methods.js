
const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//map

const getStNames = (array) => {
    let result = [];
    const getName = item => item.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}
console.log(getStNames(students))

const getName = item => item.name

const getNewArray = (array, func) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}
console.log(getNewArray(students, getName))
console.log(students.map(getName))

// const addProperty = item => {
//     item.isStudent = true
//     return item
// }

const addProperty = item => ({...item, isStudent: true})
console.log(addProperty(students))

//filter

const itPush = (array, el) => {
    array[array.length] = el;
    return array.length
}

const itFilter = (array, func) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            itPush(array, array[i])
        }
    }
    return result;
}





