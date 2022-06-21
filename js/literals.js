let str1 = 'good';
let result = taggedFunc `${str1} morning, ${str1} afternoon, ${str1} evening, and ${str1} night`;
console.log(result);

function taggedFunc(strings, exp) {
    let ret = '';
    for (let idx = 1; idx < strings.length; idx++) {
        console.log(strings[idx], exp)
        if (idx < strings.length - 1) {
            ret += exp + strings[idx];
        } else {
            ret += 'moon' + strings[idx];
        }
    }
    return ret;
}