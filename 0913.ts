// type alias
// type 재정의 불가능
type Animal = string| undefined;

let 동물 :Animal = '기린';


type Aniaml2 = {name :string, age : number};
let 동물2 :Aniaml2 = {name : "기린", age : 25};

type information = {
  readonly name? : string  
  //수정할수없음  
  //? ==> 타입 | undefined
};

//const => 재할당 방지 but 프로퍼티 수정은 가능

const 나:information= {
  name : 'kimdu'
}

//error
//나.name = '김두현';

//타입 합치기 (extend)

type PositionX = { x:number };
type PositionY = { y :number };

type NewType = PositionX&PositionY;

let postion : NewType ={
  x : 10,
  y : 20,
};


type obj = { 
  color : string,
  size : number
  readonly position : number[]
}

let obj1 : obj ={
  color : 'white',
  size : 20,
  position : [1,2,3,4]
}

type personalInformation ={
  name : string,
  phone? : number,
  email : string
}

let me :personalInformation = {
  name : 'kim',
  phone : 123,
  email : 'abc@naver.com'
}

type Adult = { adult :boolean }

type newPersonalInformation = personalInformation & Adult

let newPerson: newPersonalInformation ={
  name : 'kim',
  phone : 123,
  email : 'abc@naver.com',
  adult : true
}

