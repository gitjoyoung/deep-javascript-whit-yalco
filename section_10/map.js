// 키와 값의 쌍으로 이루어진 컬렉션
// 표준 내장 객체 중 하나
// 💡 객체와의 차이:
// 이터러블의 일종 (이터러블의 기능 사용 가능)
// 메서드와 프로퍼티 등의 기능 차이
// 객체나 배열 등의 참조값을 키로 사용 가능
// ⭐️ 키와 값을 보다 자주 변경하는 경우 적합하도록 설계됨

// Map 생성
const map1 = new Map();

// set 메서드 - 키와 값의 쌍 추가
map1.set("x", 1);
map1.set(123, "ABC");
map1.set(true, { a: 1, b: 2 });

console.log(map1);
// Map(3) { 'x' => 1, 123 => 'ABC', true => { a: 1, b: 2 } }

// [[키 쌍]...] 배열로 생성 + 초기화
const map2 = new Map([
  ["x", 1],
  [123, "ABC"],
  [true, { a: 1, b: 2 }],
]);

console.log(map2);

// Map(3) { 'x' => 1, 123 => 'ABC', true => { a: 1, b: 2 } }

// 키의 중복 불허 - 해당 키 있을 시 덮어씀
map2.set("x", 3);

console.log(map2);
// Map(3) { 'x' => 3, 123 => 'ABC', true => { a: 1, b: 2 } }

// has 메서드 - 요소 포함여부 확인
console.log(map2.has("x"), map2.has("y"));
// true false

console.log(
  map2.get("x"),
  map2.get(123),
  map2.get(true),

  // 없는 키로 접근시
  map2.get("y")
);
// 3 ABC { a: 1, b: 2 } undefined

// 💡 참조값도 키로 사용 가능
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

map2.set(objKey, "OBJ_KEY");
map2.set(arrKey, "ARR_KEY");

console.log(map2);
// Map(5) {
//   'x' => 3,
//   123 => 'ABC',
//   true => { a: 1, b: 2 },
//   { x: 1, y: 2 } => 'OBJ_KEY',
//   [ 1, 2, 3 ] => 'ARR_KEY'
// }

console.log(map2.get(objKey), map2.get(arrKey));
// OBJ_KEY ARR_KEY

// ⚠️ [참조값]이 키임에 유의
// 💡 5-1강의 객체와 비교해 볼 것
console.log(map2.get({ x: 1, y: 2 }), map2.get([1, 2, 3]));
// undefined undefined

// 때문에 이렇게 사용하면 안 됨
map2.set({ x: 3, y: 4 }, "못꺼냄");

console.log(map2);
// Map(6) {
//   'x' => 3,
//   123 => 'ABC',
//   true => { a: 1, b: 2 },
//   { x: 1, y: 2 } => 'OBJ_KEY',
//   [ 1, 2, 3 ] => 'ARR_KEY',
//   { x: 3, y: 4 } => '못꺼냄'
// }
console.log(map2.get({ x: 3, y: 4 }));
// undefined

// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(map2.delete("x"), map2.delete(objKey), map2.delete({ x: 3, y: 4 }));
// true true false

console.log(map2);
// Map(4) {
//   123 => 'ABC',
//   true => { a: 1, b: 2 },
//   [ 1, 2, 3 ] => 'ARR_KEY',
//   { x: 3, y: 4 } => '못꺼냄'
// }

// add 메서드는 결과 맵을 반환
// 💡 메서드 체이닝을 할 수 있다는 의미
const map3 = map2.set(1, "X").set(2, "Y").set(3, "Z");

console.log(map2, map3);
// Map(7) {
//   123 => 'ABC',
//   true => { a: 1, b: 2 },
//   [ 1, 2, 3 ] => 'ARR_KEY',
//   { x: 3, y: 4 } => '못꺼냄',
//   1 => 'X',
//   2 => 'Y',
//   3 => 'Z'
// } Map(7) {
//   123 => 'ABC',
//   true => { a: 1, b: 2 },
//   [ 1, 2, 3 ] => 'ARR_KEY',
//   { x: 3, y: 4 } => '못꺼냄',
//   1 => 'X',
//   2 => 'Y',
//   3 => 'Z'
// }

// size 프로퍼티 - 요소의 개수
console.log(map2.size);
// 7

// keys, values, entries 메서드 - 키 / 값 / [키, 값] 반환
console.log(map2.keys(), map2.values(), map2.entries());
// [Map Iterator] { 123, true, [ 1, 2, 3 ], { x: 3, y: 4 }, 1, 2, 3 }
// [Map Iterator] {
//   'ABC',
//   { a: 1, b: 2 },
//   'ARR_KEY',
//   '못꺼냄',
//   'X',
//   'Y',
//   'Z'
// } [Map Entries] {
//   [ 123, 'ABC' ],
//   [ true, { a: 1, b: 2 } ],
//   [ [ 1, 2, 3 ], 'ARR_KEY' ],
//   [ { x: 3, y: 4 }, '못꺼냄' ],
//   [ 1, 'X' ],
//   [ 2, 'Y' ],
//   [ 3, 'Z' ]
// }

// clear 메서드 - 모든 요소들을 삭제
map2.clear();

console.log(map2, map3);
// Map(0) {} Map(0) {}

const arr = [
  ["🐶", "강아지"],
  ["🐱", "고양이"],
  ["🐯", "호랑이"],
  ["🐵", "원숭이"],
  ["🐨", "코알라"],
];
const map = new Map(arr);

// for ... of 문
for ([key, value] of map) {
  console.log(key, value);
}
// 🐶 강아지
// 🐱 고양이
// 🐯 호랑이
// 🐵 원숭이
// 🐨 코알라

// 스프레드 문법

const newArr = [...map];

console.log(newArr);

// [
//   [ '🐶', '강아지' ],
//   [ '🐱', '고양이' ],
//   [ '🐯', '호랑이' ],
//   [ '🐵', '원숭이' ],
//   [ '🐨', '코알라' ]
// ]

// 디스트럭쳐링 구조 분해
const [x, y, z] = map;
console.log(x);
console.log(y);
console.log(z);

// [ '🐶', '강아지' ]
// [ '🐱', '고양이' ]
// [ '🐯', '호랑이' ]

const [a, b, ...rest] = map;

console.log(a);
console.log(b);
console.log(rest);
// [ '🐶', '강아지' ]
// [ '🐱', '고양이' ]
// [ [ '🐯', '호랑이' ], [ '🐵', '원숭이' ], [ '🐨', '코알라' ] ]


map.forEach(console.log);

// 아래의 결과와 같음
// map.forEach((item, idx, set) => {
//   console.log(item, idx, set)
// });

// 강아지 🐶 Map(5) {
//   '🐶' => '강아지',
//   '🐱' => '고양이',
//   '🐯' => '호랑이',
//   '🐵' => '원숭이',
//   '🐨' => '코알라'
// }
// 고양이 🐱 Map(5) {
//   '🐶' => '강아지',
//   '🐱' => '고양이',
//   '🐯' => '호랑이',
//   '🐵' => '원숭이',
//   '🐨' => '코알라'
// }
// 호랑이 🐯 Map(5) {
//   '🐶' => '강아지',
//   '🐱' => '고양이',
//   '🐯' => '호랑이',
//   '🐵' => '원숭이',
//   '🐨' => '코알라'
// }
// 원숭이 🐵 Map(5) {
//   '🐶' => '강아지',
//   '🐱' => '고양이',
//   '🐯' => '호랑이',
//   '🐵' => '원숭이',
//   '🐨' => '코알라'
// }
// 코알라 🐨 Map(5) {
//   '🐶' => '강아지',
//   '🐱' => '고양이',
//   '🐯' => '호랑이',
//   '🐵' => '원숭이',
//   '🐨' => '코알라'
// }