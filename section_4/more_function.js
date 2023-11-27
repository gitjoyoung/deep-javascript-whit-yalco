// 함수 더 알아보기

function outer() {
  const name = "바깥쪽";
  console.log(name, "함수");

  function inner() {
    const name = "안쪽";
    console.log(name, "함수");
  }
  inner();
}

outer();

// 실행결과
// 바깥쪽 함수
// 안쪽 함수

// 재귀함수
// 재귀함수는 함수가 자기 자신을 호출하는 함수
function upto5(x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log("- - -");
  }
}

upto5(1);
upto5(3);
upto5(7);
// 실행결과
// 1
// 2
// 3
// 4
// 5
// - - -
// 3
// 4
// 5
// - - -
// 7
// - - -

// 팩토리얼 재귀함수
function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

console.log(fact(1), fact(2), fact(3), fact(4));

// 즉시 실행 함수 IIFE
// Immideately Invoked Function Expression
(function () {
  console.log("IIFE");
})();
// 주요내용
// 함수를 선언하고 바로 실행하는 함수
// 현재는 잘 사용되지 않음
// 실행결과
// IIFE

// 즉시 실행 함수 IIFE 의 사용이유
// 딱 한 번만 사용될 함수에
// 전역 변수들을 사용하지 않고, 복잡한 기능을 일회성으로 실행할 때
// 다른 코드들과의 변수명이나 상수명 충돌을 막기 위함 (특히 많은 코드들이 사용될 때)
// 오늘날에는 블록과 이후 배울 모듈의 사용으로 대체

const initialMessage = (function () {
  // ⚠️ var를 사용함에 주목
  var month = 8;
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp;
  }
  avgTemp /= temps.length;

  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
})();

console.log(initialMessage);

// 실행결과
// 8월 15일 평균기온은 섭씨 29.25도입니다.
//  console.log(month); 는 레퍼러스 에러가 발생함
// ReferenceError: month is not defined
// 주요내용
// var는 전역변수로 선언되기 때문에 원래는 출력되어야함

let x = 1;
let y = {
  name: "홍길동",
  age: 15,
};
let z = [1, 2, 3];

function changeValue(a, b, c) {
  a++;
  b.name = "전우치";
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z);
console.log(x, y, z);
// 실행결과

//2 { name: '전우치', age: 16 } [ 2, 2, 3 ]
//1 { name: '전우치', age: 16 } [ 2, 2, 3 ]
// 주요 내용
// 원시값은 값이 복사되어 전달되고 객체는 참조값이 복사되어 전달됨
// 원시값은 함수 내에서 변경되어도 외부에 영향을 주지 않음
// 하지만 객체는 함수 내에서 변경되면 외부에 영향을 줌
// 그래서 전우치가 출력됨
