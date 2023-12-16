// 다른 언어들의 배열 전형적인 배열
// 한 배열에는 같은 자료형의 데이터만 포함 가능
// 데이터의 메모리 주소가 연속으로 나열됨
// 접근은 빠름, 중간요소의 추가나 제거는 느림

// 자바스크립트의 배열
// ⭐️ 배열의 형태와 동작을 흉내내는 특수 객체
// 한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
// 연속나열이 아님 - 💡 엔진에 따라 요소들의 타입이 동일하면 연속 배열하기도...
// 접근은 상대적으로 느림 (일반 객체보다는 빠름), 중간요소의 추가나 제거는 빠름
// 💡 특정 자료형 전용 배열도 있음 - 더 빠름

// 배열 생성 방법들

// 배열 리터럴
const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3]; // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1);
console.log(arr2.length, arr2);
console.log(arr3.length, arr3);
// 0 []
// 3 [ 1, 2, 3 ]
// 5 [ 1, <1 empty item>, 2, <1 empty item>, 3 ]

// arr3의 프로퍼티들 확인 빠진 인덱스 있음, 인덱스 수 < length

// 생성자 함수
// 표준 빌트인 객체들 중 하나

const arr = new Array(3);

console.log(arr);
console.log(arr.length);

console.log(arr[0], arr[1], arr[2]);

// [ <3 empty items> ]
// 3
// undefined undefined undefined
// 인자가 숫자 하나면 길이값은 있지만 요소가 없는 배열 생성 접근시 undefined

const arr4 = new Array(1, 2, 3);
const arr5 = new Array("ABC");
const arr6 = new Array(true);

console.log(arr4);
console.log(arr5);
console.log(arr6);
// [ 1, 2, 3 ]
// [ 'ABC' ]
// [ true ]
// 인자가 숫자가 아니거나 둘 이상이라면 해당 값들로 배열 생성

// 정적 메서드 of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const ar1 = Array.of(3);

const ar2 = Array.of(1, 2, 3);
const ar3 = Array.of("ABC", true, null);

console.log(ar1);
console.log(ar2);
console.log(ar3);
// [ 3 ]
// [ 1, 2, 3 ]
// [ 'ABC', true, null ]

// 정적 메서드 from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환

const ar4 = Array.from([1, 2, 3]);
const ar5 = Array.from("ABCDE");
const ar6 = Array.from({
  0: true,
  1: false,
  2: null,
  length: 3,
});

console.log(ar4);
console.log(ar5);
console.log(ar6);

// 유사배열객체: length와 인덱싱 프로퍼티를 가진 객체

const arrLike = {
  0: "🍎",
  1: "🍌",
  2: "🥝",
  3: "🍒",
  4: "🫐",
  length: 5,
};
// 🍎
// 🍌
// 🥝
// 🍒
// ''

// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}

//  for ... of 문은 이터러블에서만 사용 가능
// for (const item of arrLike) {
//     console.log(item);
//   }
// TypeError

// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}
// 🍎
// 🍌
// 🥝
// 🍒
// ''

// Array.from은 얕은 복사 - 1단계 깊이만 복사
const array1 = [1, 2, 3];
const array2 = Array.from(array1);
array2.push(4);

console.log(array1, array2);
// [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

array1[0] = 0;
console.log(array1, array2);
// [ 0, 2, 3 ] [ 1, 2, 3, 4 ]

const array3 = [{ x: 1 }, { x: 2 }];
const array4 = Array.from(array3);
array4.push({ x: 3 });

// 참조타입 요소의 내부값이 바뀔 경우
array3[0].x = 0;
console.log(array3, array4);
// [ { x: 0 }, { x: 2 } ] [ { x: 0 }, { x: 2 }, { x: 3 } ]


// 두 번째 인자: 매핑 함수

const a1 = [1, 2, 3, 4, 5];
const a2 = Array.from(a1, x => x + 1);
const a3 = Array.from(a1, x => x * x);
const a4 = Array.from(a1, x => x % 2 ? '홀' : '짝');

console.log(a2);
console.log(a3);
console.log(a4);

// [ 2, 3, 4, 5, 6 ]
// [ 1, 4, 9, 16, 25 ]
// [ '홀', '짝', '홀', '짝', '홀' ]