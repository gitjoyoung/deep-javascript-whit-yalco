// 넘버 객체

const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(numObj1, numObj2, numObj3);
// [Number: 0] [Number: 123] [Number: -123.45]
console.log(numObj1.valueOf(), numObj2.valueOf(), numObj3.valueOf());
// 0 123 -123.45

// 특정 숫자값으로 인식되는 것
console.log(
  new Number("-123.4567"),
  new Number("Infinity"),
  new Number(true),
  new Number(false)
);
// [Number: -123.4567] [Number: Infinity] [Number: 1] [Number: 0]

// NaN
console.log(
  new Number("1/2"),
  new Number("123ABC"),
  new Number("ABC"),
  new Number("{a: 1, b: 2}"),
  new Number([1, 2, 3])
);

// [Number: NaN] [Number: NaN] [Number: NaN] [Number: NaN] [Number: NaN]

const num1 = Number("123");
const num2 = Number("-123.45");
const num3 = Number(true);
const num4 = Number(false);
const num5 = Number(null);

console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof num3, num3);
console.log(typeof num4, num4);
console.log(typeof num5, num5);

// number 123
// number -123.45
// number 1
// number 0
// number 0

// 정적 프로퍼티
// EPSILON
// (Number형에서 표현 가능한 1보다 큰 가장 작은 수) - 1
// 부동소수점으로 인한 계산오차 문제 해결에 사용
console.log(Number.EPSILON);
// 2.220446049250313e-16

console.log(0.1 + 0.2);
// 0.30000000000000004

console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);
// true

// MAX_VALUE, MIN_VALUE
// 자바스크립트에서 표현 가능한 가장 큰 수와 작은 수

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// 1.7976931348623157e+308
// 5e-324

// MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
// 자바스크립트의 부동소수점 체계에서 안정적으로 나타낼 수 있는 가장 큰 정수와 작은 정수
// 더 큰 정수도 표현 자체는 가능 안전하게 하려면 BigInt 타입으로

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// 9007199254740991
// -9007199254740991

// POSITIVE_INFINITY, NEGATIVE_INFINITY
// 양과 음의 Infinity

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// Infinity
// -Infinity

// NaN
// 전역 객체(globalThis)의 NaN과 같은 값
console.log(Number.NaN);
// NaN

// 정적 메서드
// 1. 전역 객체에도 있는 메서드들
// a. 동일하지 않음 : isFinite, isNaN
// ⭐️ 전역 객체 (globalThis)의 해당 메소드와의 차이: 암묵적 타입 변환을 하지 않음

console.log(
  isFinite(null), // null을 0으로 변환
  Number.isFinite(null)
);
// true false

console.log(
  isNaN("abc"), // 숫자타입의 NaN으로 변환
  Number.isNaN("abc") // 숫자타입 자체가 아니므로 false
);
// true false

//   b. 동일함: parseInt, parseFloat
// 각각 전역의 동명 메서드들을 가리킴 🔗 parseInt 🔗 parseFloat
console.log(Number.parseInt("123.4567"), Number.parseFloat("123.4567"));
// 123 123.4567

//   (안전한) 정수 여부 확인 isInteger, isSafeInteger

console.log(Number.isInteger(123), Number.isInteger(123.45));
// true false

console.log(
  // 암묵적 변환 하지 않음
  Number.isInteger(123),
  Number.isInteger("123"),
  Number.isInteger(true),
  Number.isInteger(Infinity)
);
// true false false false

console.log(
  Number.isSafeInteger(123),
  // 정수만 반환
  Number.isSafeInteger(123.45)
);
// true false

console.log(
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER),
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);
// true false

// 인스턴스 메서드
// ⭐️ 값 자체에서 호출시 괄호로 감쌀 것 소수점과 구분 불가하므로

// 1. toExponential
// 지수 표기법으로 나타내는 문자열을 반환

const numInExp = (123.456789).toExponential();

console.log(typeof numInExp, numInExp);
// string 1.23456789e+2

// 인자로 자릿수 제한
console.log(
  (123.456789).toExponential(2),
  (123.456789).toExponential(4),
  (123.456789).toExponential(6)
);
// 1.23e+2 1.2346e+2 1.234568e+2

//   toFixed
// 최대 인자값으로 주어진 정수(0~20)만큼 소수점 이하를 반올림하여 문자열로 반환

console.log(
  // 인자가 없으면 0을 받은 것과 같음
  (111.234567).toFixed(),
  (111.234567).toFixed(0)
);
// 111 111

console.log((111.234567).toFixed(1), (111.234567).toFixed(2));
// 111.2 111.23

console.log(
  // 반올림
  (111.234567).toFixed(3),
  (111.234567).toFixed(4)
);

// 111.235 111.2346

// toPrecision
// 반올림과 지수 표기법을 사용하여 문자열 반환

console.log(
  // 인자가 없으면 toString처럼 그대로 문자열로 반환
  (1234.56789).toPrecision()
);
// 1234.56789

// 인자가 정수부 자릿수보다 적으면 지수로
console.log(
  (1234.56789).toPrecision(1),
  (1234.56789).toPrecision(2),
  (1234.56789).toPrecision(3)
);
// 1e+3 1.2e+3 1.23e+3

//  지수 표기법은 "a × 10^n"
// 예를 들어, "1.23e+3"은 1.23 × 10^3을 나타냄

// 소수점 이하 자릿수를 주어진 값만큼 유지하면서 반올림
console.log(
  (1234.56789).toPrecision(4),
  (1234.56789).toPrecision(6),
  (1234.56789).toPrecision(8)
);

// 1235 1234.57 1234.5679

//   toString
// 문자열 값 반환
// 인자 2~36 가 주어지면 해당 수의 진수로 표현

console.log(
  (11).toString(),
  (11).toString(2),
  (11).toString(8),
  (11).toString(16)
);

// 11 1011 13 b
