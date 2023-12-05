// 스프레드 spread
const class1 = {
  x: 1,
  y: "A",
  z: true,
};

const class2 = { ...class1 };

// 아래의 는 참조 복사 class2가 수정되면  class1이 수정됨
// const class2 = class1;

console.log(class2);
// 실행결과
// { x: 1, y: 'A', z: true }

const class0 = {
  d: { x: 10, y: 100 },
  e: [1, 2, 3],
};
const class3 = {
  ...class1,
  z: 0,
};
const class4 = {
  ...class0,
  ...class3,
  ...class0.d,
};
console.log(class3);
console.log(class4);
// { x: 1, y: 'A', z: 0 }
// { d: { x: 10, y: 100 }, e: [ 1, 2, 3 ], x: 10, y: 100, z: 0 }

// 3. 중복되는 프로퍼티는 뒤의 것이 덮어씀
const class5 = {
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 },
};
// 중복값이 최근으로 수정됨
console.log(class5);
// { a: 1, b: 3, c: 6, d: 7, e: 8 }

// 4. ⭐️ 복사의 깊이
const class6 = {
  x: 1,
  y: { a: 2 },
  z: [3, 4],
};

const class7 = { ...class6 };
class6.x++;
class6.y.a++;
class6.z[0]++;
console.log(class6);
console.log(class7);
// { x: 2, y: { a: 3 }, z: [ 4, 4 ] }
// { x: 1, y: { a: 3 }, z: [ 4, 4 ] }


// 해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
// 원시값만 있는 객체만 값에 의한 복사 - 얕은 복사
// 복합적인 객체의 완전한 깊은 복사는 이후 배우게 될 것
