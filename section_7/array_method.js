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

const arr = [
    '한놈', '두시기', '석삼', '너구리', '오징어'
  ];
  
  console.log(
    arr.at(1), arr.at(2)
  );
//   두시기 석삼
  console.log(
    arr.at(-1), arr.at(-2)
  );
// 오징어 너구리
