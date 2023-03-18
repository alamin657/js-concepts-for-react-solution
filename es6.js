const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
// 1. template string
const about = `My name is ${student.name} age of ${student.age}`
// console.log(about);
// 2. arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
const result = doMath(5,4);
// console.log(result);
const num1 =() => console.log(5*2);
num1()

//3. spread opearator

let newNumbers = [...numbers , 45,55];
// console.log(newNumbers);
// numbers.push(99)
// numbers.push(99)
// numbers.push(99)
// console.log(numbers)