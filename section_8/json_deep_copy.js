// 깊은 복사 deep copy
// ⭐️ JSON을 사용한 깊은 복사

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
console.log(obj2);
// { a: 1, b: { c: 2, d: { e: 3, f: [Object] } } }
// { a: 1, b: { c: 2, d: { e: 3, f: [Object] } } }

obj1.a++;
obj1.b.c++;
obj1.b.d.e++;
obj1.b.d.f.g++;

console.log(obj1);
console.log(obj2);

// { a: 2, b: { c: 3, d: { e: 4, f: [Object] } } }
// { a: 1, b: { c: 2, d: { e: 3, f: [Object] } } }

//  함수, Date, Symbol, BigInt 프로퍼티는 JSON 방식으로는 불가 또는 제한적
const obj3 = {
  a: 1,
  b: 2,
  c: function () {
    return this.a + this.b;
  },
  d: new Date(),
  e: Symbol("안녕"),
  // g: 1n // ⚠️ 오류 발생
};

const obj4 = JSON.parse(JSON.stringify(obj3));

console.log(obj3);
console.log(obj4);

// {
//   a: 1,
//   b: 2,
//   c: [Function: c],
//   d: 2023-12-25T07:31:55.170Z,
//   e: Symbol(안녕)
// }
// { a: 1, b: 2, d: '2023-12-25T07:31:55.170Z' }

//   structuredClone
// 아직은 일부 브라우저(Web API 형태로) 및 환경에서만 지원
// JSON 방식보다 빠르고 효율적인 깊은 복사
// Date와 BigInt 제대로 복사 - 함수와 Symbol은 여전히 불가
// 👉 MDN 문서 보기

const obj5 = {
  a: 1,
  b: 2,
  // c: function () { return this.a + this.b },
  d: new Date(),
  // e: Symbol('안녕'),
  g: 1n,
};

const obj6 = structuredClone(obj5);

console.log(obj5);
console.log(obj6);

// { a: 1, b: 2, d: 2023-12-25T07:31:55.172Z, g: 1n }
// { a: 1, b: 2, d: 2023-12-25T07:31:55.172Z, g: 1n }
