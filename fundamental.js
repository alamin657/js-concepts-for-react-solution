// 1. How to declare using let and const
let myName = 'Alamin';
myName = 'Habib';
// console.log(myName);
const Roll = 444657;
// console.log(Roll);
// 2. Conditions
// Six basic conditions: <,>,===,<=,>=,!=
// multiply conditions: &&,||
let firstNumber = 30;
let secondNumber = 20;
if(firstNumber != secondNumber){
    // console.log('This is a true')
}
else{
    // console.log('This is a false');
}
// 3. Array declare: length,indexof,push,pop,shift,unshift
let numbers = [10,20,30,40,50,60];
// console.log(numbers.length)
// console.log(numbers.indexOf(40));
numbers[2] = 35;
// console.log(numbers)
// numbers.pop();
// numbers.push(70);
// numbers.unshift(5)
// numbers.shift();
// console.log(numbers);
// 4.Loop(for loop and while loop)
// for loop
for(let i = 1; i<5; i++){
    // console.log(i)
}
// while loop
let i = 5;
while(i<20){
    // console.log(i);
    i++;
}
for(let i = 0; i <numbers.length; i++){
    const number = numbers[i]
    // console.log(number);
}
// 5. function
function add(num1,num2){
    const result = num1 + num2;
    return result
}
const output = add(5,7);
// console.log(output);
// 6.Object (3 ways access property)
const myDetails = {
    name:'Alamin',
    semester:'Seven',
    tech:'Computer',
    story:['pending'
    ]
}
const myTech = 'tech';
// console.log(myDetails.name)
// console.log(myDetails['semester'])
console.log(myDetails[myTech]);