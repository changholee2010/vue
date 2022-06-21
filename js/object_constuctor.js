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
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }

    this.createHead = function () {
        this.tag += '<thead><tr>';
        // let str = this.tag;
        // this.fields.forEach((elem) => {
        //     this.tag += '<th>' + elem + '</th>'; // this.tag => 사용.
        // }); // 공부해보기.
        for(let field of this.fields) {
            console.log(field);
            this.tag += '<th>' + field + '</th>'; 
        }
        // this.tag = str;
        this.tag += '</tr></thead>';
    }

    this.createBody = function () {
        this.tag += '<tbody>';
        this.data.forEach(elem => {
            // tr
            this.tag += '<tr>';
            for (let field in elem) {
                // td
                this.tag += '<td>' + elem[field] + '</td>';
            }
            this.tag += '</tr>';
        })
        this.tag += '</tbody>';
    }
}
// function() { this => window} / new 함수 => this : 객체(object), / 이벤트 => this : 이벤트 대상.
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