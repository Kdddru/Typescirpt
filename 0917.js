//리터럴
//변수 엄격하게 관리 가능
var kim;
function 함수(a) {
    console.log(a);
}
함수('가위');
var 자료 = {
    name: 'kim'
};
//타입 설정 및 수정못하게 readonly속성 부여
//리터럴 타입
var 자료1 = {
    name: 'kim'
};
function 내함수(a) {
    console.log(a);
}
/**
 * 내함수 안에 a파라미터의 타입의 kim
 * 자료.name은 타입이 아닌 string값이 들어감
 */
내함수(자료.name);
내함수(자료1.name);
var 함수1 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (x) {
        return (x + 1);
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
