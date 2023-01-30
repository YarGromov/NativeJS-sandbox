

const strings = ['Donald', 'Alex', 'Bob'];

console.log(strings.sort())

const strings2 = ['Donald', 'Alex', 'Bob', 'alex', 'john', 'Юрий','юлия', '999'];
console.log(strings2.sort())

console.log(strings2)

console.log(strings2 === strings2.sort())

const numbers = [1000, 25, 777, 6666, 0, -20, '+20']

console.log(numbers.sort())

const compareFunc = (a, b) => a - b;
console.log(numbers.sort(compareFunc))

console.log(numbers.reverse())
console.log(numbers)

const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        id: 2,
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Helge',
        age: 24,
        isMarried: false,
        scores: 90
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        id: 5,
        name: 'alex',
        age: 23,
        isMarried: true,
        scores: 178
    }
];

const compareFuncByStrForObj = (a,b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(compareFuncByStrForObj))
console.log(students.sort((a,b)=> a.name.localeCompare(b.name)))

const compareFuncByNumForObj = (a,b) => a.scores - b.scores
console.log(students.sort(compareFuncByNumForObj))


//bubble sort
const nums = [12, 10, 45, 23, 66, 78, 91, 32, 11,9]

for (let i = 0; i < nums.length -1; i++) {
    if(nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1]
        nums[i+1] = temp
    }
}
console.log(nums)

for (let j = 0; j < nums.length -1; j++) {
    let isSorted = true;
    for (let i = 0; i < nums.length -1 - j; i++) {
        if(nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i];
            // nums[i] = nums[i + 1]
            // nums[i+1] = temp
            [nums[i+1], nums[i]] = [nums[i], nums[i+1]]
        }
    }
    if(isSorted) break
}
console.log(nums)










