// reverse - 배열의 순서를 뒤집음

const array4 = [1, 2, 3, 4, 5, 6, 7];
console.log(array4);

// 💡 메서드 자체도 뒤집힌 배열을 반환
array4Rev = array4.reverse();

// 원본 배열 뒤집힘
console.log(array4, array4Rev);
// [
//   7, 6, 5, 4,
//   3, 2, 1
// ] [
//   7, 6, 5, 4,
//   3, 2, 1
// ]
array4Rev[0] = 0;

// ⭐ 반환된 배열은 원본과 같은 배열을 참조! (복사가 아님)
console.log(array4, array4Rev);

// [
//   0, 6, 5, 4,
//   3, 2, 1
// ]
//  [
//   0, 6, 5, 4,
//   3, 2, 1
// ]
