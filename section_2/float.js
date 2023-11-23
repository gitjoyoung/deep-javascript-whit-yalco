// 부동소수점 Floating Point
// 주요 특징
// 자바스크립트는 64비트 부동소수점을 사용
// 2진수로 변환하여 저장
// 2진수로 변환할 때 부정확한 값이 저장될 수 있음
// 특징을 이해해야함
// 이런 문제 때문에 라이브러리 사용

console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3);
// 실행 결과
//0.30000000000000004 false

let x = 0.1 * 10;
let y = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1;
console.log(x, y, x === y);
// 실행 결과
// 1 0.9999999999999999 false


console.log(0.2 * 0.7, 0.4 * 3, 0.9 - 0.6, 0.9 - 0.3);
// 실행 결과
// 0.13999999999999999 1.2000000000000002 0.30000000000000004 0.6000000000000001


// ⭐️ 2의 거듭제곱으로 나눈 수의 계산은 정확
console.log(0.25 * 0.5, 0.5 + 0.25 + 0.125 + 0.125, 0.0625 / 0.25);
// 실행 결과
// 0.125 1 0.25
