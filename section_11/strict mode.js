"use strict"; // 쌍따옴표도 가능

// 엄격 모드 strict mode
// 기존의 느슨한 모드에서 허용되던, 문제를 유발할 수 있는 코드들에 오류를 발생시킴
// "지금부터 대충 넘어가지 않겠다."
// 엄격 모드의 적용방법과 그 효과들 예시
// 1. 선언되지 않은 변수 사용시 오류 발생 + 범위별 적용 방법

notDeclared = 1; // 💡 암묵적으로 전역 var 변수로 선언
// ReferenceError: notDeclared is not defined
// strict 모드를 켜두면 위에러가 발생함

notDec1 = 1;

function strictFunc() {
  "use strict";

  notDec2 = 2;
  console.log(notDec2);
}

console.log(notDec1);
// 1

strictFunc();
// ReferenceError: notDec2 is not defined

// 변수, 함수, 인자 등 삭제불가한 것을 삭제시 오류 발생
// 실제로 지워지지도 않지만 오류를 발생시키지도 않음

let toDelete1 = 1;
delete toDelete1;

console.log("1.", toDelete1);

function funcToDel1() {
  console.log(true);
}
delete funcToDel1;

console.log("2.", funcToDel1);

// 인자명 중복시 오류 발생
function add(x, x) {
  return x + x;
}

console.log(add(1, 2));
