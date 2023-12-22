// - `findLast` : 주어진 조건에 해당하는, **뒤에서부터** 첫 요소 반환
// - `findLastIndex` : 위 요소의 인덱스 반환

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 앞에서부터 찾는 메서드들
const firstMult3 = myArray.find((i) => i % 3 === 0);
const firstMult3Idx = myArray.findIndex((i) => i % 3 === 0);

console.log(firstMult3, firstMult3Idx);
// 3 2

// 이전 사용법
// es14 전에는...
const lastMult3 = [...myArray].reverse().find((i) => i % 3 === 0);

const lastMult3Idx = myArray.lastIndexOf(
  [...myArray].reverse().find((j) => j % 3 === 0)
);

console.log(lastMult3, lastMult3Idx);
// 9 8

const lastMult4 = myArray.findLast((i) => i % 3 === 0);
const lastMult4Idx = myArray.findLastIndex((i) => i % 3 === 0);

console.log(lastMult4, lastMult4ㄴIdx);
// 9 8