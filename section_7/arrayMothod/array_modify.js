// 배열을 변경하는 기본 메서드들
// push, unshift ,pop, shift

// 1. push, unshift - 배열에 값을 추가
// 결과의 길이를 반환
// a. push - 값을 뒤에 추가

const arr6 = [1, 2, 3];
const x = arr6.push(4);

console.log(x, arr6);
// 4 [ 1, 2, 3, 4 ]

const y = arr6.push(5, 6, 7); // 최종 길이 반환

console.log(y, arr6);
// 7 [1, 2, 3, 4, 5, 6, 7];

// unshift - 값을 앞에 추가

const arr7 = [5, 6, 7];
const x2 = arr7.unshift(4);

console.log(x2, arr7);
// (4)[(4, 5, 6, 7)];

const y2 = arr7.unshift(1, 2, 3);

console.log(y2, arr7);
// (7)[(1, 2, 3, 4, 5, 6, 7)];

// 특징과 비교
// 수정된 배열의 길이를 반환
// 부수효과 - 원본 배열을 변경 배열 마지막 강에 배울 스프레드 문법을 보다 권장
// 💡 push보다 unshift가 더 느림 - 이후 요소들을 밀어내야 하므로

// pop, shift - 배열에서 값을 제거하여 반환
// a. pop - 값을 뒤에서 제거하여 반환
const arr8 = [1, 2, 3, 4, 5];
const x3 = arr8.pop();

console.log(x3, arr8);
// 5 [ 1, 2, 3, 4 ]
const y3 = arr8.pop();

console.log(y3, arr8);
// 4 [ 1, 2, 3 ]

// shift - 값을 앞에서 제거하여 반환

const arr9 = [1, 2, 3, 4, 5];

const x4 = arr9.shift();
console.log(x4, arr9);

// 1 [ 2, 3, 4, 5 ]

const y4 = arr9.shift();
console.log(y4, arr9);

// 2 [ 3, 4, 5 ]
// pop보다 shift가 더 느림 - 이후 요소들을 당겨야 하므로
