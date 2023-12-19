// fill - 배열을 특정 값으로 채움

// 중간의 빈 값도 채움
const array1 = [1, 2, , , 4, 5];
array1.fill(7);

console.log("1.", array1);
// 1. [ 7, 7, 7, 7, 7, 7 ]

// 💡 특정 값으로 채운 배열 생성시 유용
const array2 = new Array(10);
array2.fill(1);

console.log("2.", array2);
// 2. [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]

// 인자가 둘일 때: (채울 값, ~부터)
array2.fill(2, 3);
console.log("3.", array2);
// 3. [
//   1, 1, 1, 2, 2,
//   2, 2, 2, 2, 2
// ]

// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
array2.fill(3, 6, 9);

console.log("4.", array2);

// 4. [
//   1, 1, 1, 2, 2,
//   2, 3, 3, 3, 2
// ]

