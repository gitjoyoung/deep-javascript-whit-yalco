// flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
// 💡 flat 평평하게 한다는 의미

// [
//   1,
//   [2, 3],
//   [4, 5, 6],
//   7
// ]

// ↓ ↓ ↓

// [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7
// ]
const orgArr = [1, 2, [3, 4], [5, [6, [7, 8]]]];

// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
const arr1 = orgArr.flat(1);

const arr2 = orgArr.flat(2);
const arr3 = orgArr.flat(3);

console.log("N:", arr0);
// N: [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ] ] ]

console.log("1:", arr1);
// 1: [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ] ] ]

console.log("2:", arr2);
// 2: [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

console.log("3:", arr3);
// 3: [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// 원본에는 변화 없음
console.log("org:", orgArr);
// org: [ 1, 2, [ 3, 4 ], [ 5, [ 6, [Array] ] ] ]

// 위의 메서드들은 얕은 복사
const orgArr2 = [1, { x: 2 }, [{ x: 3 }, { x: 4 }], 5];

const ar1 = orgArr2.concat(6);
const ar2 = orgArr2.slice(0, 3);
const ar3 = orgArr2.flat();

orgArr2[0] = 0;
orgArr2[1].x = 20;
orgArr2[2][0].x = 30;

console.log(orgArr2);
// [ 0, { x: 20 }, [ { x: 30 }, { x: 4 } ], 5 ]

console.log(ar1);
// [ 1, { x: 20 }, [ { x: 30 }, { x: 4 } ], 5, 6 ]

console.log(ar2);
// [ 1, { x: 20 }, [ { x: 30 }, { x: 4 } ] ]

console.log(ar3);
// [ 1, { x: 20 }, { x: 30 }, { x: 4 }, 5 ]
