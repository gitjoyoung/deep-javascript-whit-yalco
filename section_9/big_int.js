// Number.MAX_SAFE_INTEGER 더 큰 정수를 다루기 위한 자료형
// 매우 큰 정수를 다뤄야 하는 특수한 경우에 사용

console.log(Number.MAX_SAFE_INTEGER);

//   number 타입으로 안정적으로 표현할 수 있는 가장 큰 정수 - 9007199254740991 (2^53 - 1)
for (let i = 0; i < 5; i++) {
  console.log(Number.MAX_SAFE_INTEGER + i);
}
// 이상하게 출력됨
// 9007199254740991
// 9007199254740991
// 9007199254740992
// 9007199254740992
// 9007199254740994
// 9007199254740996

// 아래의 방법들로 생성
const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt("9007199254740991");
const bigInt4 = BigInt(0x1fffffffffffff); // 9007199254740991

console.log(bigInt1 === bigInt2, bigInt2 === bigInt3, bigInt3 === bigInt4);
// true true true

console.log(typeof bigInt1);
// bigint

for (let i = 0; i < 5; i++) {
  console.log(bigInt1 + BigInt(i));
}
// 순서 대로 잘 출력
//   9007199254740991n
//   9007199254740992n
//   9007199254740993n
//   9007199254740994n
//   9007199254740995n

// BigInt의 특징들
// 일반 number 타입과 산술 (+, -, *, /, %, **) 연산 불가

// console.log(
//     1n + 1
//   );
// Cannot mix BigInt and other types, use explicit conversions

console.log(1n + 1n);
// 2n

// 양쪽 모두 BigInt로 변환하여 계산하는 방법 사용
const calcAsBigInt = (x, y, op) => {
  return op(BigInt(x), BigInt(y));
};

console.log(calcAsBigInt(1n, 1, (x, y) => x + y));
// 2n

// 비교 연산 가능
// 값과 타입 모두 같아야 하는 일치 연산자 === 는 안됨
console.log(
  1n === 1, // 타입은 다름
  1n == 1,
  1n < 2,
  1n >= 0,
  2n < 1
);

// false true true true false

// number 숫자와 섞여 정렬 가능

console.log([4n, 7, 6n, 3, 1, 5, 9, 2n, 8n].sort((a, b) => (a > b ? 1 : -1)));

//   [
//     1, 2n,  3, 4n, 5,
//    6n,  7, 8n,  9
//  ]

// 불리언으로 변환되는 연산 가능

console.log(!!0n, !!1n);
0n ? console.log("참") : console.log("거짓");
1n ? console.log("참") : console.log("거짓");
// false true
// 거짓
// 참

// 소수점 아래는 버림
console.log(5n / 2n);

// 2n

// Math의 정적 메서드에서 사용 불가

// console.log(Math.max(1n, 2n));
// TypeError: Cannot convert a BigInt value to a number

// number로 변환 - 정확성 유실 주의!

console.log(Number(1n), Number(9007199254740993n));
// 1 9007199254740992