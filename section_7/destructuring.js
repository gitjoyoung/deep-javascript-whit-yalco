// . 디스트럭쳐링 destructuring
// 1. 문법
// 기존 코드

const arr = [1, 2, 3];

const x = arr[0];
const y = arr[1];
const z = arr[2];

console.log(x, y, z);
// 1 2 3

// 디스트럭쳐링으로 간략화
const [a, b, c] = arr;
console.log(a, b, c);
// 1 2 3

// 일부만 가져오는 것도 가능
const [d, f] = arr;
console.log(d, f);
// 1 2

// 응용
// const [a, b, c, d = 4, e = 5] = arr;
// console.log(a, b, c, d, e);

// 기본값보다 할당값이 우선
// const [f, g, h = 4] = arr;
// console.log(f, g, h);

// 나머지 변수 사용 가능
const arr2 = [1, 2, 3, 4, 5];

const [x2, ...x3] = arr2;

console.log(x2, x3);
// 1 [ 2, 3, 4, 5 ]

// 활용예
const players = [
  { name: "순이", score: 91 },
  { name: "정환", score: 65 },
  { name: "윤수", score: 72 },
  { name: "철웅", score: 88 },
  { name: "지우", score: 98 },
  { name: "세아", score: 40 },
];

// 배열 중 첫 3개만 가져옴
function logTop3([first, second, third]) {
  console.log(`1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`);
}
logTop3(
  [...players] // 💡 원본의 얕은 복사본을 정렬
    .sort((a, b) => b.score - a.score)
    .map(({ name }) => name)
);
// 1등은 지우!! 2등과 3등은 순이, 철웅입니다.
// 💡 원본의 순서 변경하지 않음

let num = 1;
let num2 = 2;

// 서로 값을 바꾸기
[num, num2] = [num2, num];

console.log(num, num2);
// 2 1

// 피보나치 수열
let num3 = 0;
let num4 = 1;

for (let i = 0; i < 10; i++) {
  [num3, num4] = [num4, num3 + num4];
  console.log(num4);
}
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89

let [a2, b2, c2, d2] = "@-&=".split("");

for (let i = 0; i < 24; i++) {
  [a2, b2, c2, d2] = [d2, a2, b2, c2];
  console.log([a2, b2, c2, d2].join("   "));
}
// =   @   -   &
// &   =   @   -
// -   &   =   @
// @   -   &   =
// =   @   -   &
// &   =   @   -
// -   &   =   @
// @   -   &   =
// =   @   -   &
// &   =   @   -
// -   &   =   @
// @   -   &   =
// =   @   -   &
// &   =   @   -
// -   &   =   @
// @   -   &   =
// =   @   -   &
// &   =   @   -
// -   &   =   @
// @   -   &   =
// =   @   -   &
// &   =   @   -
// -   &   =   @
// @   -   &   =
