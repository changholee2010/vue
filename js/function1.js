// function1.js

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(10, 20));
console.log(sum('10', '20')); // +

function minus(v1, v2) {
    return v1 - v2;
}
console.log(minus('20', '10'));

function sumAry(ary) {

}
let numAry = [20, 27, 33, 19, 44];
let result = sumAry(numAry);

result = 0;
numAry.forEach(function (val, idx, ary) {
    // console.log(a, b, c);
    result += val;
}); // 메소드의 매개값으로 함수: 콜백함수.

console.log('홀수 배열의 합: ' + result);