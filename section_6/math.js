// 수학에 관련된 기능을 가진 빌트인 객체
// 👉 MDN 문서 보기

// 정적 프로터피와 메서드만 제공
// Number 타입만 지원 - BigInt 사용 불가

// I. 주요 정적 프로퍼티
// PI - 원주율

console.log(Math.PI);

//   E - 자연로그의 밑
console.log(Math.E.length);
// 3.141592653589793
//   II. 주요 정적 메서드
// 1. abs - 절대값(0 이상) 반환
console.log(Math.abs(123), Math.abs(-123));

// 0 반환
console.log(Math.abs(0), Math.abs(""), Math.abs(null), Math.abs([]));

// NaN 반환
console.log(
  Math.abs("abc"),
  Math.abs(undefined),
  Math.abs({ a: 1 }),
  Math.abs([1, 2, 3]),
  Math.abs()
);

// NaN NaN NaN NaN NaN

// 인자 a,b 를 받아서 ans 절대값으로 반환하고 이 값이 number의 앱실론 값보다 작다면
// boolean 값 반환
const isEqual = (a, b) => {
  return Math.abs(a - b) < Number.EPSILON;
};
console.log(Number.EPSILON);
// 2.220446049250313e-16
console.log(isEqual(0.1 + 0.2, 0.3));
// true

// ceil 올림, round 반올림, floor 내림, trunc 정수부만
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + " : ",
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num)
  );
}
// 1.4 :  2 1 1 1
// 1.6 :  2 2 1 1
// -1.4 :  -1 -1 -2 -1
// -1.6 :  -1 -2 -2 -1

// NaN 반환
console.log(Math.ceil(), Math.round(), Math.floor(), Math.trunc());
// NaN NaN NaN NaN

// pow - ~로 거듭제곱
console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0
  Math.pow(4, -1) // 4 ** -1
);

// 16 4 1 0.25

// NaN 반환
console.log(Math.pow(4));

// NaN

// sqrt - 제곱근

console.log(
  Math.sqrt(25), // 25 ** 0.5
  Math.sqrt(9),
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);
// 5 3 1.4142135623730951 1 0

// max, min - 인자들 중 최대값과 최소값
console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);
// 9 1

// random - 0~1 사이의 무작위 값
// 완벽한 랜덤은 아님
for (let i = 0; i < 10; i++) {
  console.log(Math.random());
}
// 0.551016950832772
// 0.043479855164000325
// 0.1871192053827484
// 0.3950822660162552
// 0.041601449435505033
// 0.4154299524885927
// 0.7782862967616184
// 0.8143669949465051
// 0.6658143686169875
// 0.23386898722400074

// 0 ~ 9 사이의 정수 무작위로 만들기
for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * 10));
}
// 9
// 1
// 4
// 8
// 0
// 1
// 3
// 8
// 6
// 7

// 안전한 (균일하고 예측불가한) 난수 생성은 아님!
// 보안에 관련된 것이라면 전용 라이브러리 또는 아래 링크의 방식을 쓸 것
// 👉 Crypto.getRandomValues 메서드

// sin, cos, tan, asin, acos, atan
// 사인, 코사인, 탄젠트, 아크사인, 아크코사인, 아크탄젠트

console.log(
  // 1(또는 근사값) 반환
  Math.sin(Math.PI / 2),
  Math.cos(Math.PI * 2),
  Math.tan(Math.PI / 180 * 45)
);
// 1 1 0.9999999999999999


console.log(
  // Math.PI / 2 반환
  Math.asin(1),
  Math.acos(0),
  Math.atan(Infinity)
);

// 1.5707963267948966 1.5707963267948966 1.5707963267948966