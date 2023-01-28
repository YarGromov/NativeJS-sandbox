const todolistId1 = '123fdsa';
const todolistId2 = '123assd';

const todolists = [
    {
        id: todolistId1,
        title: 'What to learn',
        filter: 'all'
    },
    {
        id: todolistId2,
        title: 'What to buy',
        filter: 'all'
    }
]

const getPropName = (param) => `${param}key`

const tasks = {
    [todolistId1]: [
        {id: "12", name: 'HTML', isDone: true},
        {id: "13", name: 'CSS', isDone: false}
    ],
    [todolistId2]: [
        {id: "24", name: 'Meat', isDone: true},
        {id: "22", name: 'Milk', isDone: false}
    ],
    // [30 + 10]: [],
    // [getPropName('object_')]: []
}

console.log(tasks[todolistId1][0].name)
console.log(tasks[todolistId2][0]['name'])
console.log(tasks[todolistId2].filter(el => el.isDone))
console.log([...tasks[todolistId1], {id: "133", name: 'React', isDone: false}])
console.log(tasks[todolists[1].id])


//reduce

const nums = [1, 2, 3, 4, 5]

console.log(nums.reduce((acc, el) => acc + el, 0))

const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

const newStudents = {
    '1': {
        name: 'Bob',
        age: 34,
        friends: [
            {name: "Fill"},
            {name: 'Kirill'}
        ]
    },
    '2': {
        name: 'Alex',
        age: 32,
        friends: [
            {name: "Chuck", count: 1},
            {name: 'Norris', count: 2}
        ]
    }
}


console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))






