// 1. Array destructuring
const numbers = [49,59];
// const x = numbers[0];
// const y = numbers[1];
// const [x,y] = [49,59]
const [x,y] = numbers
// console.log(x,y);
// 2. Object destructuring
const languages = {
    firstLanguage:'C',
    secondLanguage:'C++',
    webDevlopment:
        ['html','css','bootstrap','tailwind','javascript','es6','json','dom','react'],
    drem:{
        topics:'python'
    }
}
const {firstLanguage,secondLanguage} = languages;
console.log(firstLanguage);

