let user : string = 'kim';
let age : (undefined | number ) = undefined;
let married : boolean =false;
let 철수 : (string | undefined | number | boolean)[] 
=[ user, age, married];

let 학교 : {
  score : (number|boolean)[], 
  teacher: string, 
  friend : (string | string[])
}={
  score : [100,97,84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false
학교.friend = ['Lee',학교.teacher]



function 함수(x:number ):void{
  //void 리턴값이 없을때
  console.log(x*2);
}

함수(6);

function 함수2(x? : number) : void{
  // ? => type | undefined
  console.log(x * 3)
}

함수2(5);


function callName (x? : string): void{
  if(x){
    console.log(`안녕하세요 ${x}`);
  }
  else{
    console.log('입력해라 ^^')
  }
}
callName();
callName('김두현');


function printLength(x ?: number):void{
  //typescript에선 확실한것을 좋아하기때문에
  if(x){
    console.log(x.toString().length);
  }
  else{
    console.log('입력해라 ^^')
  }
}

printLength(123);