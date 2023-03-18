// 1. JSON: stringify and parse
const student = {
    name: 'Alamin',
    age: 20,
    semester: ['first,second,third,fourth,fipth,six']
}
// console.log(student);
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);
const studentParse = JSON.parse(studentJSON);
// console.log(typeof studentParse);
// 2. fetch
// fetch('url')
//     .then(res => res.JSON())
//     .then(data => console.log(data))

// keys,values
const studentKeys = Object.keys(student);
// console.log(studentKeys);
const studentObject = Object.values(student);
// console.log(studentObject);
// for
let numbers = [20, 30, 40, 50];
// numbers.forEach(number => console.log(number));
const num1 = numbers.map(number => number * 2);
// console.log(num1);

// for of on array like object
// loop on an object using for in 

// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
// array te spread operator diye add korte hoy
const newProduct = { name: 'car', price: 100000, brand: 'bmw', color: 'white' };
const newProducts = [...products, newProduct];
// console.log(newProducts)
const remaining = products.filter(product => product.name !== 'sunglass');
console.log(remaining);