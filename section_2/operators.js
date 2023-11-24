// 연산자


// 쉼표 연산자
let x = 1, y = 2, z = 3;
console.log(x, y, z);
// 1 2 3


// 괄로를 주었기 때문에 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
);
//실행결과
// 12

// null 병합 연산자
let x2;
x2 ?? console.warn(x2, 'x2에 값이 없습니다.');

x2 = 0;
x2 ?? console.warn(x2, 'x2에 값이 없습니다.');

x2 = null;
x2 ?? console.warn(x2, 'x2에 값이 없습니다.');

// 실행결과
// 주요내용
// 언디파인와 널 병합 연산자는 변수에 값이 없을때만 적용됨
// 값이 없는 경우에만 실행할 때 사용

// undefined x2에 값이 없습니다.
// null x2에 값이 없습니다.


let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
  a ?? '기본값',
  b ?? '기본값',
  c ?? '기본값',
  d ?? '기본값',
  e ?? '기본값',
);

// 실행결과
// false 0  기본값 기본값
// 주요내용
// 널 병합 연산자는 null과 undefined만 확인함


// 활용
let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';

console.log(nameTag1, nameTag2);

// 홍길동 2번 아기


let x3 = 1;
let y2 = 19 === 3 + 4 * 2 ** ++x3;

console.log(y2);