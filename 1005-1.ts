class Person{
  //타입스크립트에선 타입 지정후 constructor에 변수할당
  name:string;
  constructor(a:string){
    this.name = a
  }
  함수(a:string){
    console.log('안녕 '+ a)
  }
}

let 사람1 = new Person('김');
let 사람2 = new Person('이');

console.log(사람1.name);
console.log(사람2.name);

사람1.함수('나');