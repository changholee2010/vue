// variable.js

console.log('Hello, World!!');
document.write('<h3>Hello, World!!</h3>');

let num = 0;
num = 'Hello';
num = 10;
num = 'ten';
num = true;
num = null; // object => class의 인스턴스.
let num1; // undefined.

console.log(typeof num1);

num1 = 100;
let num2 = 200; // 변수의 선언이 없이 사용 : 전역객체(window)의 속성.
console.log(num1 + num2);

console.log(window);

// class Student {
//     String sno;
//     String sname;
//     void showInfo() {
//         return this.sno + this.sname;
//     }
// }

// Student student = new Student();
// student.sno;
// student.showInfo();

// window.alert('안녕하세요')

// 변수 : 학생이름, 학생번호, 영어, 수학.
let student = new Object(); // object 선언.
student.sno = '22-0123';
student.sname = '홍길동';
student.engScore = 90;
student.mathScore = 80;

console.log(student);

let person = {
    fname: '김민수',
    age: 20,
    height: 175.5,
    showInfo: function () {
        return this.fname + ', ' + this.age + ', ' + this.height;
    }
};
person.weight = '68.5';

console.log(person.fname);
console.log(person.showInfo());
console.log(person['age']);
let field = 'height';
console.log(person[field]);

// 전체 필드를 for loop .. in
// debugger;
for (let field in person) {
    console.log(field + ' => ' + person[field]);
}
console.log(field);
let x = 10;
let y = 20;

// 변수: me => 이름, 취미, 연락처, 주소, 소개: 이름, 취미, 연락처 반환.
let me = {
    name: '박소현',
    hobby: '여행',
    phone: '010-1111-2222',
    address: '대구',
    introduce: function () {
        return this.name + ', ' + this.hobby;
    }
}
console.log(me.introduce());