function myFun(x) {
    //type Narrowing
    if (typeof x === 'number') {
        console.log(x + 1);
    }
    else {
        console.log(x + '1');
    }
}
myFun(123);
function myFun2(x) {
    var array = [];
    array[0] = x;
    //Assertion 
    //x의 타입을 number로 덮어쓰기
    /**
     * 여러개의 유니온 타입을 확정시킬때
     * 무슨타입이 들어올지 100%확실할때 쓰셈
    */
}
var 이름 = 'kim';
// 이름 as number  ===>  error
myFun2(123);
function cleaning(x) {
    var array = [];
    x.map(function (value) {
        if (typeof value === 'number') {
            array.push(value);
        }
        else {
            array.push(parseInt(value));
        }
    });
    console.log(array);
}
cleaning([1, 2, 3, '4', '5']);
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function printSubject(x) {
    if (Array.isArray(x.subject)) {
        console.log(x.subject[x.subject.length - 1]);
    }
    else if (typeof x.subject === 'string') {
        console.log(x.subject);
    }
    else {
        console.log('error');
    }
}
printSubject(철수쌤);
printSubject(영희쌤);
printSubject(민수쌤);
