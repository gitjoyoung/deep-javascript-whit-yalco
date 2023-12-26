// 추가 자료형들
// Lesson 1. 2, 8, 16진법과 비트 연산자

// 2진법 binary
// 0b 뒤로 숫자 0, 1 를 붙여 표현

// 1~5
const binary = [0b1, 0b10, 0b11, 0b100, 0b101];
binary.forEach((i) => console.log(i));
//   1
//   2
//   3
//   4
//   5

//   console.log(
//     0b2 // ⚠️ 토큰으로 인식 - 오류
//   );

// 8진법 octal
// 0o 뒤로 숫자 0~7 를 붙여 표현
const octal = [0o7, 0o10, 0o100, 0o1000];
octal.forEach((i) => console.log(i));
// 7
// 8
// 64
// 512

//   16진법 hexadecimal
// 0x 뒤로 숫자 0~9, A~F 를 붙여 표현
const hexadecimal = [0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0xffffff];
hexadecimal.forEach((i) => console.log(i));
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 16777215

// 진법 간 변환

const num = 123456789;

const binStr = num.toString(2);
const octStr = num.toString(8);
const hexStr = num.toString(16);

console.log("--");
console.log(binStr, octStr, hexStr);
// 111010110111100110100010101 726746425 75bcd15

// 각각의 진법으로 해석
console.log(parseInt(binStr, 2), parseInt(octStr, 8), parseInt(hexStr, 16));
// 123456789 123456789 123456789

// 이 외에도 2 ~ 36 사이의 진법 사용 가능 - toString과 parseInt의 가용 인자 범위

// 💡 상호변환
console.log(
  parseInt(binStr, 2).toString(8),
  parseInt(octStr, 8).toString(16),
  parseInt(hexStr, 16).toString(2)
);
//  726746425 75bcd15 111010110111100110100010101
