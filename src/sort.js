

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