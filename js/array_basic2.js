let data = `[{"id":1,"first_name":"Gus","last_name":"Falck","email":"gfalck0@vk.com","gender":"Male","salary":2598},
{"id":2,"first_name":"Daisey","last_name":"Armstrong","email":"darmstrong1@imdb.com","gender":"Female","salary":2653},
{"id":3,"first_name":"Nathan","last_name":"Villa","email":"nvilla2@walmart.com","gender":"Agender","salary":4374},
{"id":4,"first_name":"Aleen","last_name":"Humfrey","email":"ahumfrey3@mapy.cz","gender":"Female","salary":1483},
{"id":5,"first_name":"Chadd","last_name":"Suggett","email":"csuggett4@nifty.com","gender":"Male","salary":2265},
{"id":6,"first_name":"Mollie","last_name":"Orsman","email":"morsman5@people.com.cn","gender":"Female","salary":1283},
{"id":7,"first_name":"My","last_name":"Danhel","email":"mdanhel6@edublogs.org","gender":"Male","salary":1573},
{"id":8,"first_name":"Nora","last_name":"O' Mahony","email":"nomahony7@goodreads.com","gender":"Female","salary":4440},
{"id":9,"first_name":"Dede","last_name":"Stoneman","email":"dstoneman8@weather.com","gender":"Agender","salary":4664},
{"id":10,"first_name":"Gloria","last_name":"Furphy","email":"gfurphy9@constantcontact.com","gender":"Female","salary":1602},
{"id":11,"first_name":"Lenci","last_name":"Dupre","email":"lduprea@ask.com","gender":"Male","salary":1813},
{"id":12,"first_name":"Cirstoforo","last_name":"Marquiss","email":"cmarquissb@princeton.edu","gender":"Male","salary":2518},
{"id":13,"first_name":"Mirabelle","last_name":"Rendle","email":"mrendlec@blogtalkradio.com","gender":"Female","salary":4175},
{"id":14,"first_name":"Rochelle","last_name":"Rhucroft","email":"rrhucroftd@sakura.ne.jp","gender":"Agender","salary":4134},
{"id":15,"first_name":"Amby","last_name":"Mushawe","email":"amushawee@altervista.org","gender":"Male","salary":4522}]`;

let objAry = JSON.parse(data); // JSON.parse() : 문자열 => 오브젝트.
console.log(data);
console.log(objAry);

let over3000 = objAry.filter((val, idx) => { // {id:?, fname:?, lname:?, salary:?.....}
    return val.salary >= 3000; // filtering 처리.
}).map((val, idx) => {
    let obj = {}; // A -> B
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);

// Female 값 평균값을 기능 구현.
let avg, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val => val.gender == 'Female') // 배열.
    .forEach(val => {
        sum += val.salary;
        cnt++;
    });
avg = sum / cnt;
console.log(`여사원의 급여평균 ${avg}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
// salaries = objAry.map(val => val.salary);

console.log(salaries);

function getMaxValue(ary = []) {
    // 배열요소에서 제일 큰값을 반환하는 함수.
    let max = Number.MIN_SAFE_INTEGER;
    ary.forEach(val => {
        if (max < val) {
            max = val;
        }
    })
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰값 : ${maxVal}`);

function getMinValue(ary = []) {
    // 배열요소에서 제일 큰값을 반환하는 함수.
    let min = Number.MAX_SAFE_INTEGER;
    ary.forEach(val => {
        if (min > val) {
            min = val;
        }
    })
    return min;
}

function sortAscend(ary = []) {
    // 오름차순 정렬하는 함수.
    let numAry = ary;
    let newAry = [];

    return newAry;
}
result = sortAscend(salaries);

console.log(salaries);
console.clear();

// reduce 메소드. [ 1, 2, 3, 4]
result = salaries.reduce(function (accum, curr, curIdx, ary) {
    console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합 ${accum + curr}`);
    return curr + accum;
}, 0); // map, filter 메소드
console.log(`최종 결과: ${result}`);

result = [1, 2, 3, 4].reduce(function (accum, curr) {
    if (curr % 2 == 0)
        accum.push(curr); // 배열에 추가.
    return accum;
}, []); // accum = [1], [1,2], [1,2,3], [1,2,3,4]

// result = [1, 2, 3, 4].map(val => val);
// result = [1, 2, 3, 4].filter(val => {
//     if (val % 2 == 0) {
//         return val;
//     }
// })
console.clear();
// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1) {
        accum += '</ul>';
    }
    console.log(accum); // <ul><li>Apple</li><li>Banan</li><li>cherry</li>
    return accum;
}, '');
console.log(result);
document.write(result);

result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    if (accum < curr)
        return accum;
    else return curr;
}, Number.MAX_SAFE_INTEGER); // max 값을 반환. 문제1)

result = [3, 2, 4, 1, 5].reduce((accum, curr) => {
    return accum + curr;
}); // 합을 구하기.

result = [3, 2, 4, 1, 5, 7].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == ary.length - 1) { // 마지막 순번일 경우에.
        return (accum + curr) / ary.length;
    }
    return accum + curr;
}); // 평균 구하기.
console.log(result);