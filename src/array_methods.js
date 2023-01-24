
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

//includes

const itIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}
console.log(itIncludes(students, students[0]))

// unShift

const itUnShift = (array, value) => {
    for (let i = array.length-1 ; i > 0; i--) {
        array[i + 1] = array[i]
    }
    array[0] = value
    return array;
}
console.log(itUnShift(students, {key: 'value'}
))




//this
function getLetngth(){
    return this.length
}

Array.prototype.hey = getLetngth;
const arr = [1];
console.log(arr.hey())


Array.prototype.getName = function (){
    for (let i = 0; i < this.length; i++) {
        console.log(this[i].name)
    }
}

students.getName()
















