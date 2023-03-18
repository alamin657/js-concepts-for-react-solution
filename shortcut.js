// truthy: 'alamin',5,true,{},[]
// falsy: '', 0, false, null, undefined
// truthy check
let number = 10;
if (number) {
    number = number * 5;
    // console.log('This is truthy', number);
}
else {
    number = 0;
    // console.log('This is falsy', number)
}
// falsy check
let money = 400;

if (!money) {
    // console.log('this is true')
}
else {
    // console.log('this is false')
}
// ternary opearator
const food = money > 200 ? 'birani' : 'khicuri';
// console.log(food);
//  number to string  conversion
const num = 40;
const numStr = num + '';
// console.log(typeof numStr);
// string to number conversion
const num2 = '50';
const num2Number = +num2;
// console.log(num2Number);
// different ways number to string conversion
const num3 = 50;
const num3Str = num3.toString();
// console.log(num3Str)
// different ways string to number conversion
const num4 = '50';
// console.log(typeof parseInt(num4));
// toggle boolean
let isActive = true;
isActive = !isActive;
// console.log(isActive);



