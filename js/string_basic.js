// string_basic.js

let str = 'Hello'; // 문자열 string
let str1 = new String('Hello'); // 문자열 객체(object)

console.log(str == str1); // 값
console.log(str === str1.valueOf()); // 타입 & 값

let num = new Number(123); // number => object
let num1 = 123; // number;
console.log(num.valueOf() === num1); // 객체 => 기본데이터타입 변환.

// 원시타입: string, number, boolean, undefined, 
// 객체타입: 함수, Object( {name:?, age:?}), 배열, null, 

console.log(" Hello ".trimStart());
console.log("This is the only story".substr(10, 5));

let strOri = "This is the only story";
console.log(strOri.slice(0, 5));

// indexOf()

// search()
// only, story
let ary = [];
let oby = {};
let reg = /good/; // new RegExp();
let regStr = "bad MORNING, GOOD AFTERNOON, goodevening, and good night";
console.log(regStr.replace(/good\s/gi, 'bad '));

// sample 번호
let jmn = '9503041234567';
jmn = '950304-1234567';
jmn = '950304 2234567';

