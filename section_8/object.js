// Object 클래스
// 이제까지 배운 자바스크립트 객체들의 원형

console.log(
  new String("ABC") instanceof Object,
  new Number(123) instanceof Object,
  [] instanceof Object,
  function () {} instanceof Object,
  globalThis instanceof Object
);

// true true true true true
// 브라우저에서 각각 따로 출력해서 [[Prototype]]을 펼쳐 볼 것
// 파고 들어가면 결국에 object가 나온다!!
console.log(new String("ABC"), new Number(123), [], function () {}, globalThis);

// 생성자 함수
// 빈 객체 생성

console.log(new Object(), new Object(null), new Object(undefined));
// {} {} {}

// 각 값에 적합한 래핑함수로 작용
console.log(
  new Object(1),
  new Object("ABC"),
  new Object(true),
  new Object([1, 2, 3])
);
// [Number: 1] [String: 'ABC'] [Boolean: true] [ 1, 2, 3 ]
// 해당 값을 자동으로 원시값으로 감싸 랩핑해서 보여줌 "원시 래퍼 객체" 또는 "박싱(boxing)"

// 주요 정적 메서드
// 1. assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음
// ⭐️ 대상 객체를 변경
// 결과 객체를 반환
// ⚠️ 얕은 복사
// 인자들:
// 대상 객체
// 원본 객체(들)

const intro1 = {
  name: "홍길동",
};
const intro2 = { ...intro1 };

console.log(intro1, intro2);
// { name: '홍길동' } { name: '홍길동' }

const personal = {
  age: 25,
  married: false,
};
const career = {
  job: "개발자",
  position: "팀장",
};
// 둘 이상의 원본에서 가져올 수도 있음

Object.assign(intro1, personal);
console.log(intro1);
// { name: '홍길동', age: 25, married: false }
Object.assign(intro2, personal, career);
console.log(intro2);
// { name: '홍길동', age: 25, married: false, job: '개발자', position: '팀장' }

const obj1 = new Object();
const obj2 = { x: 1, y: 2 };
const obj3 = { y: 3 };
const obj4 = { z: { a: 1 } };

Object.assign(obj1, obj2, obj3, obj4);

console.log(obj1);
// { x: 1, y: 3, z: { a: 1 } }

// 프로퍼티의 키가 같을 경우 뒤에 오는 인자의 것이 덮어씀
obj2.x = 0;
obj4.z.a = 2;
console.log(obj1);
// 얕은 복사
// { x: 1, y: 3, z: { a: 2 } }

// keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환

const obj = {
  x: 1,
  y: 2,
  z: 3,
};

const obj0 = [obj];
console.log(obj0 === obj);

console.log(Object.keys(obj));
// ["x", "y", "z"];

console.log(Object.values(obj));
// [1, 2, 3];
console.log(Object.entries(obj));
// [
//   ["x", 1],
//   ["y", 2],
//   ["z", 3],
// ];

// globalThis는 브라우저에서는 window, Node.js에서는 global
console.log(Object.keys(globalThis).sort());
// [
//     'atob',           'btoa',
//     'clearImmediate', 'clearInterval',
//     'clearTimeout',   'crypto',
//     'fetch',          'global',
//     'performance',    'queueMicrotask',
//     'setImmediate',   'setInterval',
//     'setTimeout',     'structuredClone'
//   ]

// 배열에 사용할 경우
// 배열도 본질적으로는 객체
const arr = [1, 2, 3, 4, 5];

console.log(Object.keys(arr), Object.values(arr), Object.entries(arr));
// [ '0', '1', '2', '3', '4' ] [ 1, 2, 3, 4, 5 ] [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ], [ '3', 4 ], [ '4', 5 ] ]

// 객체가 아닐 경우 객체로 변환함
const str = "ABCDEFG";

console.log(Object.keys(str), Object.values(str), Object.entries(str));
// ["0", "1", "2", "3", "4", "5", "6"][("A", "B", "C", "D", "E", "F", "G")][
//   (["0", "A"],
//   ["1", "B"],
//   ["2", "C"],
//   ["3", "D"],
//   ["4", "E"],
//   ["5", "F"],
//   ["6", "G"])
// ];

