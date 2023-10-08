interface Square{
  color : string,
  width : number
}

let 네모 :Square = {
  color : 'red',
  width : 100
}

//type
//중복선언 불가능
type Animal ={
  name: string
}
type Cat = {
  age: number
} & Animal


//중복선언 가능
//extends 사용가능
interface Student{
  name :string
}
interface Teacher extends Student{
  age : number
}


let 학생 = {
  name : 'kim'
}

let 선생 = {
  name :'kim',
  age : 20
}

