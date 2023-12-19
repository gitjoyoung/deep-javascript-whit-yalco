
// 1. concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환

// ⭐️ 원본 배열을 수정하지 않음
// 얕은 복사본

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
const a3 = [true, false];

const a4 = a1.concat(a2);

console.log(a4);
// [ 1, 2, 3, 'a', 'b', 'c' ]

const a5 = a1.concat(a2, 3);

console.log(a5);
// [1, 2, 3, 'a', 'b', 'c', 3]
const a6 = a1.concat("ABC", a2, a3, 100);

console.log(a6);
// [1, 2, 3, 'ABC', 'a', 'b', 'c', true, false, 100]

// ⭐️ 원본 배열들에는 변화 없음
console.log(a1, a2, a3);
// [ 1, 2, 3 ] [ 'a', 'b', 'c' ] [ true, false ]

// 해당 배열 뒤로 인자로 하나 이상 주어진 다른 배열이나 값을 이어붙인 결과를 반환


