const products = [
    {name:'Laptop', brand:'Dell',price:3200,color:'Silver'},
    {name:'Phone', brand:'Iphone',price:2200,color:'Gold'},
    {name:'Watch', brand:'Rolex',price:2000,color:'White'},
    {name:'Sunglass', brand:'Ray',price:500,color:'Black'},
]
// 1.map
const brands = products.map(product => product.brand);
// console.log(brands);
// 2.forEach
// products.forEach(product => console.log(product.name));
// 3.find
const price = products.find(product => product.price);
// console.log(price);
// 4. filter
const details = products.filter(product => product.price);
console.log(details);
