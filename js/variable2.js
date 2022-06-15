// variable2.js
var l1; // hoisting

let ary = new Array(); // |0|1|2|   ~ |14|
ary[0] = 10;

ary = [20, 30, 15, 27]; // 선언 & 초기화 
ary[ary.length] = 50;
ary[ary.length] = 60;
ary[ary.length] = 65;
ary[10] = 100;

console.log(typeof ary[7]);

for (let i = 0; i < ary.length; i++) {
    console.log(i + '번째 ' + ary[i]);
}

ary = ['사과', '바나나', '고구마', '수박', 32];

console.clear(); // 로그 지우기.
document.write('<ul>');
for (let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>');
}
document.write('</ul>');

ary = [
    {name:'홍길동', age: 20, phone: '010-1111-2222'},
    {name:'김민수', age: 24, phone: '010-3333-4444'},
    {name:'박우용', age: 27, phone: '010-5555-6666'},
    {name:'최선식', age: 30, phone: '010-8888-7777'}
]

// document.write('<ul>');
// for(let person of ary) {
//     document.write('<li>' + person['name'] +', '+ person['phone'] + '</li>');
// }
// document.write('</ul>');
let str = '';
str += '<ul>';
for (let person of ary) {
    str += '<li>이름: ' + person['name'] + ', 나이: ' + person['age'] + ', 연락처: ' + person['phone'] + '</li>';
}
str += '</ul>';
// <table><tr><td>홍길동</td><td>20</td><td>010-1111-2222</td></tr>....</table>
str = '<table border=1>';
for (let person of ary) {
    str += '<tr>';
    for (let field in person) {
        str += '<td>' + person[field] + '</td>';
    }
    str += '</tr>';
}
str += '</table>';
console.log(str);
document.write(str);

const v1 = 'hello';
// v1 = 'new';
// 원시타입 vs. 참조타입.
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);

let o1 = {
    name: 'one'
};
let o2 = o1;
o2.name = 'two';
o1.name = 'three';
console.log(o1, o2);

const obj = {
    sno: '22-12345',
    sname: 'Hong'
}
obj.sno = '22-22222'; // obj 상수변수에 값을 새롭게 선언X, obj 참조하는 속성의 값을 변경O.
// obj = ''; // 새로운 값을 할당 => 오류.

// var vs. let : 변수선언.
// var 변수선언 : 변수의 scope => 전역변수/ 지역변수
let var1 = 'hello';

{
    let var1 = 'new hello';
    console.log(var1);
}

localFnc(); // 함수호출.
function localFnc() {
    let var2 = 'nice'; // 지역변수(local variable)
    console.log(var2);
    console.log(var1);
}
// console.log(var2);
console.log(var1);

console.log(l1);
var l1 = 'hello';
var l1 = 'hello';
console.log(l1);
var num;
for (num of ary) {
    console.log(num.age);
}
console.log(num);