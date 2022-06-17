// function2.js

// 함수정의문.
function sumAry(ary) { // 매개변수(parameter).
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return result;
}
// const sumAry = function(ary) {...} => 함수정의문 => 함수표현식처리.

let args = [1, 2, 3, 4, 5]; // 매개값(argument).
sumAry(args); // 실행문 호출.

let arrNum = [1, 2, 3];
sumAry(arrNum);

// 함수표현식.
const sum = function (num1, num2) {
    if (!num1) { // undefined -> false 의미.( null, 0, '' )
        num1 = 0;
    }
    num2 = num2 == undefined ? 0 : num2; // 삼항연산자.
    return num1 + num2;
}
console.log(sum(10)); // 함수정의문()

const sum2 = sum; // 함수정의문.
console.log(sum2(10, 20));

console.log(sumAry);

// 함수표현식.
const sayHello = name => 'Hello ' + name; // 화살표함수.
// 메소드 의 매개값 (콜백함수)
console.log(sayHello('홍길동'));

let arr = ['홍길동', '김영수', '최민식'];
arr.forEach((val /*, ind, ary*/ ) => console.log(sayHello(val))); // 

arrNum = [29, 34, 12, 55, 29, 42];
// 1. 배열의 각 요소중에 짝수의 값만 더하도록 sumEven(args);
// 2. 배열의 홀수번째 요소의 합 sumOdd(args);
console.log(sumEven(arrNum));
console.log(sumOdd(arrNum));

// 여러분들이 작성.
function sumEven(arr) {

}