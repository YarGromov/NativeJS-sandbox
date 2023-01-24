
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


const getStNames = (array) => {
    let names = [];
    for (let i = 0; i < array.length; i++) {
        names[i] = array[i].name
    }
    return names
}
console.log(getStNames(students))

