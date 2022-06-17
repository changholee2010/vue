// object_constructor.js

// 객체 생성.
function Student(sno, sname, age) {
    this.sno = sno; // this => window.
    this.sname = sname;
    this.age = age;
    this.showInfo = function () {
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}
let s1 = new Student('22-1111', '홍길동', 19);
let s2 = s1;
s2.sno = '22-2222';
console.log(s1.showInfo());

function Table(param) {
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function () {
        this.tag += '<table border=1>';
        this.tag += this.createHead();
        this.tag += this.createBody();
        this.tag += '</table>';
        return this.tag;
    }

    this.createHead = function () {
        this.fields.forEach();
    }

    this.createBody = function () {
        this.data.forEach()
    }
}

let data = [{
        sname: '홍길동',
        age: 15,
        height: 167.8,
        weight: 64.5
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175.3,
        weight: 72.3
    },
    {
        sname: '김민수',
        age: 24,
        height: 182.3,
        weight: 79.3
    }
]

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);