// 1. 양과 음의 정수와 실수
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
);
// 실행결과
// number number number


// 2. 무한대
let x = 1 / 0;
console.log(x, typeof x);
// 실행결과
//Infinity number


// 무한대에는 양음이 있음
console.log(-x, typeof -x);
// 실행결과
// -Infinity number

let y = -1 / 0;
console.log(y, typeof y);
// 실행결과
// -Infinity number

let z = Infinity;
console.log(z, typeof z);
// 실행결과
// Infinity number