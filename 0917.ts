//리터럴
//변수 엄격하게 관리 가능
let kim :'대머리'|'솔로';

type 가위바위보 = '가위'|'바위'|'보'

function 함수(a:가위바위보){
  console.log(a);
}

함수('가위');

var 자료 = {
  name : 'kim'
} as const 
//타입 설정 및 수정못하게 readonly속성 부여
//리터럴 타입



var 자료1 : {name : 'kim'} = {
  name : 'kim'
}

function 내함수(a:'kim'){
  console.log(a)
}
/**
 * 내함수 안에 a파라미터의 타입의 kim
 * 자료.name은 타입이 아닌 string값이 들어감
 */

내함수(자료.name);
내함수(자료1.name);

//함수
type 함수타입 = (a:string) => number;

let 함수1 : 함수타입 = function(a){
  return 10
}


type 회원정보타입 = {
  name : string,
  plusOne : (x:number) => number,
  changeName : ()=> void
}

let 회원정보 = {
  name: 'kim',
  plusOne(x){
    return(x+1)
  },
  changeName : () =>{
    console.log('안녕')
  }
}

회원정보.plusOne(1);
회원정보.changeName();