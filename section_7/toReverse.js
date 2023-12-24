// toReversed : 뒤집힌 결과를 반환

array5 = [3, 1, 4, 5, 2];
array6 = [...array5];

array5Reversed = array5.reverse();
array6Reversed = array6.toReversed();

array5Reversed.push(6);
array6Reversed.push(6);

console.log(array5Reversed, array6Reversed);
// [ 2, 5, 4, 1, 3, 6 ] [ 2, 5, 4, 1, 3, 6 ]

// 원본 배열은 수정 안됨
console.log(array5, array6);
// [ 2, 5, 4, 1, 3, 6 ] [ 3, 1, 4, 5, 2 ]

