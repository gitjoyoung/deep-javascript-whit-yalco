// 이터러블과 제너레이터
// Set
// 중복되지 않는 값들의 집합
// 표준 내장 객체 중 하나

// 💡 배열과의 차이:
// 동일한 값을 여러 번 포함할 수 없음
// 값들의 순서가 무의미함

// I. 기본 사용법

// Set 생성
const set1 = new Set();

// add 메서드 - 요소 추가
set1.add(1);
set1.add("A");
set1.add(true);


console.log(set1);
// Set(3) { 1, 'A', true }

// 이미 포함된 요소는 추가하지 않음
set1.add(1);
set1.add(true);

console.log(set1);
// Set(3) { 1, 'A', true }

// 배열을 인자 넣으면 생성 + 초기화

// 중복된 요소 제거
const set2 = new Set([1, 1, 1, "A", true]);

console.log(set2);
// Set(3) { 1, 'A', true }

// has 메서드 - 요소 포함여부 확인
console.log(set2.has(1), set2.has("A"), set2.has(4));
// true true false


// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(set2.delete("A"), set2.delete(true), set2.delete(100));
// true true false

console.log(set2);
// Set(1) { 1 }

// add 메서드는 결과 셋을 반환
const set3 = set2.add(2);

console.log(set3);
// Set(2) { 1, 2 }

// 💡 결과를 반환함으로 메서드 체이닝을 할 수 있다는 의미
set2.add(3).add(4).add(5);

// 참조형이므로 둘이 같은 Set을 가리킴
console.log(set2, set3);
// Set(5) { 1, 2, 3, 4, 5 } Set(5) { 1, 2, 3, 4, 5 }

// size 프로퍼티 - 요소의 개수
console.log(set2.size);
// 5

// keys, values, entries 메서드 - 값 / 값 / [값, 값] 반환
// key를 value와 같이 취급
console.log(set2.keys(), set2.values(), set2.entries());
// [Set Iterator] { 1, 2, 3, 4, 5 } [Set Iterator] { 1, 2, 3, 4, 5 } [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }

// clear 메서드 - 모든 요소들을 삭제
set2.clear();

console.log(set2, set3);
// Set(0) {} Set(0) {}

// 참조형 데이터의 경우
const objSet1 = new Set()
.add({ x: 1, y: 2 })
.add({ x: 1, y: 2 })
.add([1, 2, 3])
.add([1, 2, 3]);

// 각기 다른 것으로 인식 (참조하는 주소가 다르므로)
console.log(objSet1);
// Set(4) { { x: 1, y: 2 }, { x: 1, y: 2 }, [ 1, 2, 3 ], [ 1, 2, 3 ] }

const obj = { x: 1, y: 2 };
const arr = [1, 2, 3];

const objSet2 = new Set()
.add(obj)
.add(obj)
.add(arr)
.add(arr);

// 같은 것들로 인식
console.log(objSet2)
// Set(2) { { x: 1, y: 2 }, [ 1, 2, 3 ] }

console.log(
  objSet2
  .add({ x: 1, y: 2 })
  .add({ x: 1, y: 2 })
  .add([1, 2, 3])
  .add([1, 2, 3])
);
// Set(6) {
//   { x: 1, y: 2 },
//   [ 1, 2, 3 ],
//   { x: 1, y: 2 },
//   { x: 1, y: 2 },
//   [ 1, 2, 3 ],
//   [ 1, 2, 3 ]
// }

// 이터러블로(반복 가능한 객체)서의 Set
const arr2 = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr2);

// for ... of 문 으로 출력
for (item of set) {
  console.log(item);
}
// A
// B
// C
// D
// E

const newArr = [...set];

console.log(newArr);
// [ 'A', 'B', 'C', 'D', 'E' ]

// 활용 - 중복을 제거한 배열 반환
const arr3 = [1, 1, 1, 2, 2, 3, 4, 5];

const arr4 = [...new Set(arr3)];

console.log(arr4);
// [ 1, 2, 3, 4, 5 ]

// 디스트럭쳐링

const [x, y] = set;
console.log(x);
console.log(y);
// A
// B

const [a, b, ...rest] = set;

console.log(a);
console.log(b);
console.log(rest);

// A
// B
// [ 'C', 'D', 'E' ]

// 이터러블과 별개 - forEach 메서드도 사용 가능

// ⚠️ 두 번째 인자가 인덱스가 아님!
// 배열과 달리 순서 개념이 없으므로...
// 형식을 맞추기 위한 인자일 뿐

set.forEach(console.log);

// 아래의 결과와 같음
// set.forEach((item, idx, set) => {
//   console.log(item, idx, set)
// });