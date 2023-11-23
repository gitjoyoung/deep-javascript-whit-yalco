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

// 숫자가 아닌것
let x2 = 1 / 'abc';
let y2 = 2 * '가나다';
let z2 = NaN;

console.log(x2, typeof x);
console.log(y2, typeof y);
console.log(z2, typeof z);
// 실행결과
// NaN number
// NaN number
// NaN number


let x3 = 1 / 'abc';

console.log(
  x3,
  typeof NaN,
  x3 == NaN,
  x3 === NaN,
  isNaN(x3), // 숫자가 아닐 시 true
  Number.isNaN(x3) // 보다 엄격한 버전
);
// 실행결과
// NaN number false false true true
// 주요 내용
// NaN도 숫자 자료형이다.
// NaN은 Not a Number의 약자로, 숫자가 아님을 의미함

// x3 == NaN, x3 === NaN 은 false 를 반환함
// NaN 은 자기 자신과도 같지 않다는 특징이 있음
// 따라서 NaN 을 확인할 때는 isNaN 함수를 사용해야 함

// isNaN 과 Number.isNaN 의 차이는 
//isNaN 은 숫자가 아닌 값이 들어오면 true 를 반환하지만 
// Number.isNaN 은 숫자 자료형이면서 NaN 인 경우에만 true 를 반환함. 엄격하다고 볼 수 있음

// 값 반환
let x4 = 10;
let y4 = x4 * 10;

console.log(
  y4 + 1, // 덧샘
  y4 - 1, // 뺄셈
  y4 * 2, // 곱셈
  y4 / 5, // 나눗셈
  y4 % 3,  // 나머지
  y4 ** 2 // 제곱
);
console.log(y4);
// 실행결과
// 101 99 200 20 1 10000
// 100
// 주요내용 
//  y4 +1 의 출력 결과는 101 이지만, y4 의 값은 100 이다.
// 즉, y4 + 1 은 y4 에 1을 더한 값을 출력만 한 것이지, y4 의 값에 직접적으로 1 증가시키는 것은 아니다.



// 널리 사용되는 홀수와 짝수의 판별법
console.log(
  '홀수 ',
  123 % 2,
  55 % 2,
  999 % 2
);
console.log(
  '짝수 ',
  2 % 2,
  100 % 2,
  8 % 2
);

// 실행결과
// 홀수  1 1 1
// 짝수  0 0 0


let x5 = 10;

// 값을 반환부터 하고 증가
console.log('1.', x5++, x5);
console.log(x5);
console.log('1.', ++x5, x5);
console.log(x5);
// 실행결과
// 1. 10 11
// 11
// 1. 12 12
// 12

// 주요내용
// ++ 연산자는 변수의 값을 1 증가시킴
// x5++ 은 x5 의 값을 나중에 1 증가시킴
// ++x5 는 x5 의 값을 먼저 1 증가시킴


console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열
);

// 실행결과
// 100 -100 NaN

let x6 = 3;

x6 += 2;
console.log(x6);

x6 -= 3;
console.log(x6);

x6 *= 12;
console.log(x6);

x6 /= 3;
console.log(x6);

x6 %= 5;
console.log(x6);

x6 **= 4;
console.log(x6)