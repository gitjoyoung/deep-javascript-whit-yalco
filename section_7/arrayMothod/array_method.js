// 특정 값을 반환하는 기본 메서드들
// (정적) isArray - 배열인지 여부를 반환

console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray("123"),
  Array.isArray("123".split(""))
);

// true false true

//   instanceof Array와의 차이

const arrays = [
  [],
  [1, 2, 3],
  new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype, // 배열임
];

for (const item of arrays) {
  console.log(item, Array.isArray(item), item instanceof Array);
}

// [] true true
// [ 1, 2, 3 ] true true
// [] true true
// Object(0) [] true false

const notArrays = [1, "abc", true, null, {}];

for (const item of notArrays) {
  console.log(item, Array.isArray(item), item instanceof Array);
}
// 1 false false
// abc false false
// true false false
// null false false
// {} false false

// at - 주어진 인자를 인덱스로 값을 반환
// ⭐️ 음수를 사용하여 뒤에서부터 접근 가능

const arr = ["한놈", "두시기", "석삼", "너구리", "오징어"];

console.log(arr.at(1), arr.at(2));
//   두시기 석삼
console.log(arr.at(-1), arr.at(-2));
// 오징어 너구리

const arr2 = [1, 2, 3, "abc", true];

console.log(arr2.includes(2), arr2.includes("abc"), arr2.includes(true));
// true true true

console.log(arr2.includes(4), arr2.includes("가나다"), arr2.includes(false));

// false false false

const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };
// 객체가 가르키는 주소값이 다르다
const arr3 = [obj1, { x: 3, y: 4 }];

console.log(
  // 포함
  arr3.includes(obj1),
  // 다른 참조 값
  arr3.includes(obj2),
  // 다른 참조 값
  arr3.includes({ x: 1, y: 2 }),
  // 다른 참조 값

  arr3.includes({ x: 3, y: 4 })
);

// true false false false

const arr5 = [1, 2, 3, 2, 1];

console.log(
  arr5.indexOf(2),
  arr5.lastIndexOf(2),
  // 배열에 값이 없으면 -1 반환
  arr5.indexOf(4)
);
// 1 3 -1

const ar1 = ["a", "b", "c", "d", "e"];
const ar2 = [1, true, null, undefined, "가나다", { x: 0 }, [1, 2, 3]];

console.log(
  ar1.join() // 인자가 없다면 쉼표`,`로
);
// a,b,c,d,e

console.log(ar1.join(""));
// abcde

console.log(ar1.join(" "));
// 한칸 띄우기
// a b c d e

console.log(ar2.join(":"));
// : 로 구분 null undefined 는 출력 안함 객체는 오브젝트 출력
// 1:true:::가나다:[object Object]:1,2,3

console.log(classIntro(3, "김민지", "영희", "철수", "보라"));

function classIntro(classNo, teacher, ...children) {
  return (
    `${classNo}반의 선생님은 ${teacher}, ` +
    `학생들은 ${children.join(", ")}입니다.`
  );
}
// 3반의 선생님은 김민지, 학생들은 영희, 철수, 보라입니다.

// 배열을 변경하는 기본 메서드들
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
