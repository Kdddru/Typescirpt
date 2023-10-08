let 제목 = document.querySelector('#title');

//instanceof 연산자 
if(제목 instanceof Element){
  제목.innerHTML = '반가워요'
}

//optional chaining
//제목?innerHtml  있으면 출력 없으면 undefined
/**
 * if(제목?.innerHTML){
  제목.innerHTML = '반가워요'
}
 */

let 링크 = document.querySelector('.link');

//a 태그일때
// h태그이면 heading
if(링크 instanceof HTMLAnchorElement){
  링크.href ='https://kakao.com'
}

let 버튼 = document.querySelector('.button');

버튼?.addEventListener('click',function(){

})

let 이미지 = document.querySelector('#image');

if(이미지 instanceof HTMLImageElement){
  이미지.src = 'new.jpg'
}

let 네이버s = document.querySelectorAll('.naver');

console.log(네이버s)
네이버s.forEach(링크 => {
  if(링크 instanceof HTMLAnchorElement){
    링크.href = ' https://kakao.com'
  }
});

