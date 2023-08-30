var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    //void 리턴값이 없을때
    console.log(x * 2);
}
함수(6);
function 함수2(x) {
    // ? => type | undefined
    console.log(x * 3);
}
함수2(5);
function callName(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    else {
        console.log('입력해라 ^^');
    }
}
callName();
callName('김두현');
function printLength(x) {
    if (x) {
        console.log(x.toString().length);
    }
    else {
        console.log('입력해라 ^^');
    }
}
printLength(123);
