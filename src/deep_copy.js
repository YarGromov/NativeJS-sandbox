const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Создайте поверхностную копи объекта user

let copyUser = {...user};

// console.log(user === copyUser)
// console.log(user.friends === copyUser.friends)

//2 Глубокая копия объекта user

let deepCopyUser = {...user, friends: {...user.friends}};

// console.log(user === deepCopyUser)
// console.log(user.friends === deepCopyUser.friends)

//3 Поверхностная копия массива student

let copyStudent = [...students];

// console.log(students === copyStudent)
// console.log(students[0].name === copyStudent[0].name)

//4 Глубокая копия массива student(map)

let deepCopyStudent = students.map(el => {
    return {...el}
});
// console.log(deepCopyStudent)
// console.log(students === deepCopyStudent)
// console.log(students[0] === deepCopyStudent[0])


//Далее все преобразования выполняем не модифицируя исходный массив students

//5 Отсортируйте студентов по алфавиту
const compareByName = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}
const compareByName2 = (a, b) => a.name.localeCompare(b.name)
let sortByNames = students.sort(compareByName2);
// console.log(sortByNames)

//5а   Отсортируйте студентов(deepCopyStudent) по успеваемости (лучший идёт первым (sort))
let sortByScores = (a, b) => {
    if (a.scores > b.scores) return 1
    else return -1
}
let sortByScores2 = (a, b) => a.scores - b.scores
let sortBySores = deepCopyStudent.sort(sortByScores2);
// console.log(sortBySores)

//6. Сформируйте массив студентов, у которых 100 и более баллов(filter)
let bestStudents = students.filter(el => el.scores >= 100);
// console.log(bestStudents);

//6а Сформируйте массив из трёх лучших студентов из deepCopyStudent (splice)
let topStudents = deepCopyStudent.map(el => ({...el})).sort((a,b)=>a.scores - b.scores).splice(3)
// let sortStudentByScores = deepCopyStudent.sort(sortByScores2)
// for (let i = sortStudentByScores.length-1; i >= 3; i--) {
//     topStudents.push(sortStudentByScores[i])
// }
// console.log(topStudents);
// console.log(deepCopyStudent);

//6b. Объедините массивы deepCopyStudents и topStudents так, чтоб сохранился порядок сортировки(spread-оператор)
let newDeepCopyStudents = [...topStudents,...deepCopyStudent ];
// console.log(newDeepCopyStudents);

//7. Сформируйте массив холостых студентов(filter)
let notMarriedStudents = students.filter(el => !el.isMarried);
// console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов(map)
let studentsNames = students.map(el => el.name);
// console.log(studentsNames);
//
//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом(join)
// - запятой(join)

let arrWithSpace = [];
for (let i = 0; i < students.length; i++) {
    arrWithSpace.push(students[i].name)
}
let nameWithSpace = arrWithSpace.join(' ');
// console.log(nameWithSpace)
// console.log(typeof nameWithSpace)

let arrWithComma = [];
for (let i = 0; i < students.length; i++) {
    arrWithComma.push(students[i].name)
}
let nameWithComma = arrWithComma.join(', ');
// console.log(nameWithComma)
// console.log(typeof nameWithComma)


//9. Добавьте всем студентам свойство "isStudent" со значением true(map)
let trueStudents = students.map(el => ({...el, isStudent: true}));
// console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students(map)
let studentsWithMarriedNick = students.map(el => el.name === 'Nick' ? {...el, isMarried: true}: el);
// console.log(studentsWithMarriedNick);


//11. Найдите Студентку по имени Ann(find)
let ann = students.find(el => el.name === 'Ann');
// console.log(ann);
// console.log(students);
//
//12. Найдите студента с самым высоким баллом(reduce)
let bestStudent = students.reduce((acc,val) => acc.scores > val.scores ? acc : val);
// console.log(bestStudent);

//12a. Найдите 2 студента с самым высоким баллом
let bestStudent1 = students.reduce((acc,val) => acc.scores > val.scores ? acc : val);
let bestStudent2 ;
// console.log(bestStudent1);
// console.log(bestStudent2);

//13. Найдите сумму баллов всех студентов(reduce)
let scoresSum = students.map(el => ({...el}).scores).reduce((acc, val)=>acc+val)
// console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
let addFriends = (students) => {
    // let newStudents = [...students].map(st => ({...st, friends: students.map(st => st.name).filter(s => s !== st.name)}))

    // newStudents.map(el => el.friends = [])
    // for (let i = 0; i < newStudents.length; i++) {
    //     for (let j = 0; j < newStudents.length; j++) {
    //         if(newStudents[i].name !== newStudents[j].name) {
    //             newStudents[i].friends.push(newStudents[j].name)
    //         }
    //     }
    // }

    return students.map(
        s => {
            const names = students.map(s => s.name)
            const filteredNames = names.filter(st => st !== s.name)
            return {...s, friends: filteredNames}
        }
    )
};
console.log(addFriends(students));


