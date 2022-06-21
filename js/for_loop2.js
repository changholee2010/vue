// for_loop2.js
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

let ary = JSON.parse(data);
// console.log(ary)
// forEach.
ary.forEach(elem => {
    if (elem.gender == 'Female') {
        console.log(elem)
    }
});

// let femaleAry = ary.filter(); // gender=='Female'
// console.log(femaleAry);
console.clear();
let newCompany = ary.map(elem => { // elem : A
        let newElem = {}; // newElem : A'
        newElem.nId = elem.id;
        newElem.name = elem.first_name + ',' + elem.last_name;
        newElem.salary = elem.salary * 1.5;
        newElem.isNew = elem.salary > 4000 ? false : true;
        return newElem;
    }) // A -> A'
    .filter(elem => elem.isNew)
// .forEach(elem => console.log(elem));
console.log(newCompany);

let result = newCompany.reduce(); // 새로운회사 직원 급여합.