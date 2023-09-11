function myFun (x: number|string){
  //type Narrowing
  if(typeof x === 'number' ){
    console.log(x+1);
  }
  else{
    console.log(x+'1'); 
  }
  
}

myFun(123);


function myFun2 (x: number|string){
  let array:number[]=[];
    array[0] = x as number ;  
    //Assertion 
    //x의 타입을 number로 덮어쓰기
    /**
     * 여러개의 유니온 타입을 확정시킬때
     * 무슨타입이 들어올지 100%확실할때 쓰셈
    */
}

let 이름:string = 'kim';
// 이름 as number  ===>  error

myFun2(123);

function cleaning(x : (number|string)[]){
  let array:number[] = [];

  x.map((value)=>{
    if(typeof value === 'number'){
      array.push(value);
    }
    else{
      array.push(parseInt(value));
    }
  })
  
  console.log(array);
}

cleaning([1,2,3,'4','5']);



let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }


function printSubject(x: {subject : string|string[]}){
  if(Array.isArray(x.subject)){
    console.log(x.subject[x.subject.length-1])
  }
  else if(typeof x.subject === 'string'){
    console.log(x.subject)
  }
  else{
    console.log('error')
  }
}

printSubject(철수쌤);
printSubject(영희쌤);
printSubject(민수쌤);