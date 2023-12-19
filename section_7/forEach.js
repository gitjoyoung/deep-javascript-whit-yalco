
// forEach - 각 요소를 인자로 콜백함수 실행
// 💡 for문의 좋은 대체제
// ⚠️ 단점 : 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가
// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg - this 주제 섹션에서 다룰 것

const arr = [1, 2, 3, 4, 5];

const result = arr.forEach((itm) => {
  console.log(itm);
});

// 1
// 2
// 3
// 4
// 5

// 💡 결과로는 undefined 반환 - 실행 자체를 위한 메서드
console.log("반환값:", result);
// 반환값: undefined

// 현존하는 함수를 인자로 - 💡 결과 살펴볼 것
arr.forEach(console.log);
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]

const arr2 = [10, 20, 30, 40, 50];

// 콜백함수의 인자가 둘일 때
arr2.forEach((itm, idx) => {
  console.log(itm, idx);
});
// 10 0
// 20 1
// 30 2
// 40 3
// 50 4

const logWithIndex = (itm, idx) => {
  console.log(`[${idx}]: ${itm}`);
};

arr2.forEach(logWithIndex);
// [0]: 10
// [1]: 20
// [2]: 30
// [3]: 40
// [4]: 50


// 콜백함수의 인자가 셋일 때
arr2.forEach((itm, idx, arr) => {
  // 💡 세 번째 인자는 원본 배열의 참조임
  arr[idx]++;
  console.log(itm);
});
// 10
// 20
// 30
// 40
// 50
// 이런 식으로 원본을 수정해버릴 수 있음
console.log(arr2);
// [ 11, 21, 31, 41, 51 ]
