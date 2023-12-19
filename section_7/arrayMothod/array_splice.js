// splice - 원하는 위치에 요소(들)을 추가 및 삭제
// 2개 이상의 인자를 받음
// start : 배열 변경을 시작할 위치
// deleteCount : 제거할 요소의 개수
// item(s) : 추가할 하나 이상의 요소

const array = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
array.splice(2, 2);

console.log(array);
// [ 1, 2, 5, 6, 7 ]

// 3번 인덱스부터 요소 제거 없이 'a' 추가
array.splice(3, 0, "a");
console.log(array);
// [ 1, 2, 5, 'a', 6, 7 ]

// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
array.splice(1, 3, "가", "나", "다");

console.log(array);
// [ 1, '가', '나', '다', 6, 7 ]

// 배열의 delete - empty 값을 남김

const array2 = [1, 2, 3, 4, 5, 6, 7];
delete array2[2];

console.log(array2);
// [ 1, 2, <1 empty item>, 4, 5, 6, 7 ]
// 💡 때문에 배열의 값 삭제에는 splice 사용
array2.splice(2, 1);

console.log(array2);
// [ 1, 2, 4, 5, 6, 7 ]
