// slice - 인자로 주어진 범주의 값을 잘라 반환
// 1~2개 인자를 받음
// begin : 시작 위치
// end : 종료 위치

const arraySlice1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arraySlice2 = arraySlice1.slice(3);
const arraySlice3 = arraySlice1.slice(3, 7);

console.log(arraySlice2, arraySlice3);
// [4, 5, 6, 7, 8, 9][(4, 5, 6, 7)];

// 원본에는 변화 없음
console.log(arraySlice1);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
