// 비트 연산자들

let x = 0b1010101010; // 682
let y = 0b1111100000; // 992

console.log(x, y);
// 682 992

// & 기호는 and 연산으로 비교하는 양 이진수가 공통으로 1일 경우에 1로 바꿔줌
// 1010101010
// 1111100000
// 1010100000
const bitAnd = x & y;

console.log(bitAnd);
console.log(bitAnd.toString(2));
// 672
// 1010100000

// or 연산 한 쪽이라도 1인 자리에 1
const bitOr = x | y;

console.log(bitOr);
console.log(bitOr.toString(2));
// 1002
// 1111101010

// ^ xor 연산 이진수의 대응하는 비트가 서로 다를 때만 결과 비트를 1로 설정
// 양쪽이 다른 자리에 1
const bitXor = x ^ y;

console.log(bitXor);
console.log(bitXor.toString(2));
// 330
// 101001010

// ~  NOT 연산자는 각 비트를 반전 각 비트 반전
console.log(~x);
console.log((~x).toString(2));
// -683
// -1010101011

console.log(~y);
console.log((~y).toString(2));

// -993
// -1111100001

let z = 0b101; // 5

console.log(z.toString(2), z);

// 101 5

// 쉬프트 연산
// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
z = z << 1;

console.log(z.toString(2), z);
// 1010 10

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
for (let i = 0; i < 5; i++) {
  z = z << 1;
  console.log(z.toString(2), z);
}
// 101 5
// 1010 10
// 10100 20
// 101000 40
// 1010000 80
// 10100000 160
// 101000000 320

// 반대로도 가능
z = z >> 1;

console.log(z.toString(2), z);

for (let i = 0; i < 5; i++) {
  z = z >> 1;
  console.log(z.toString(2), z);
}

// 1010000 80
// 101000 40
// 10100 20
// 1010 10
// 101 5