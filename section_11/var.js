// 구시대의 유물 var = variable
// var : let과 const가 생기기 전 변수 선언에 사용되던 문
// 각종 문제점들을 갖고 있으므로 오늘날에는 사용하지 않을 것을 권장
// 1. 선언 없이도 사용 가능

notDeclared = 1; // 미리 선언한 부분이 없을 시 var로 만들어짐
console.log(notDeclared);
// 1

// num이 var로 선언된 것
for (num of [1, 2, 3]) {
  console.log(num);
}
// 1
// 2
// 3

// 코딩 중 실수의 여지가 됨

let a = 1;
// let a = 2; // ⚠️ 오류 SyntaxError: Identifier 'a' has already been declared
const b = 1;
// const b = 2; // ⚠️ 오류 SyntaxError: Identifier 'b' has already been declared
var c = 1;
var c = 2;
// var 는 그런 오류없음

// 블록 레벨 스코프 무시

let num1 = 1;
{
  let num1 = 2;
  {
    let num1 = 3;
  }
}

console.log(num1);
// 1

var num2 = 1;
{
  var num2 = 2;
  {
    var num2 = 3;
  }
}

console.log(num2);
// 3

// for문의 스코프도 무시
for (var i = 0; i < 5; i++) {
  var pow2 = i ** 2;
  console.log(pow2);
}
// 0
// 1
// 4
// 9
// 16
console.log(i, pow2);
// 5 16

// 함수의 스코프는 유효함
var num3 = 1;

function func1() {
  var num3 = 2;
  return num3;
}

console.log(num3);
console.log(func1());
// 1
// 2
console.log("*----*");



// 호이스팅
console.log(hoisted1); // ⚠️ 오류
console.log(hoisted1); // 💡 오류발생 X, 대신 undefined 반환
// undefined
// undefined


var hoisted1 = "Hello";

console.log(hoisted1);
// console.log(hoisted2); // ⚠️ 오류 밑에 let으로 선언 되었고 초기화 이후에 접근은 에러가 발생한다

// Hello
//ReferenceError: Cannot access 'hoisted2' before initialization


let hoisted2 = "Hello";

console.log(hoisted2);
// 엄연히는 let도 호이스팅 되지만 undefined로 초기화되지 않는 것
// 초기화되기 이전의 영역: 🔗 TDZ에 속함
