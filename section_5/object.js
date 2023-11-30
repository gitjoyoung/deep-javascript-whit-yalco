// 객체의 기본 사용법들

//객체 생성과 프로퍼티 접근
const food1 = {
  name: "햄버거",
  price: 5000,
  vegan: false,
};

console.log(food1);

console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1["price"] // 💡 대괄호 프로퍼티 접근 연산자
);

// 실행결과

//   { name: '햄버거', price: 5000, vegan: false }
// 햄버거 5000

// 객체의 값 추가 수정
const food2 = {};

// 프로터피 추가
food2.name = "샐러드";
food2.price = "6000";
food2["vegan"] = true;

console.log(food2);
//  실행결과
// { name: '샐러드', price: '6000', vegan: true }

// 프로터피 수정
food2["price"] = "6500";
food2.vegan = false;

console.log(food2);
//  실행결과
// { name: '샐러드', price: '6500', vegan: false }

// 식별자 설정
// 식별자 명명 규칙에 벗어나는 키 이름 사용
// 상수명 변수명 으로 사용할수 없는 이름의 키를 쓰려면
const obj = {
  1: "하나", // 숫자도 객체의 키로는 사용 가능
  "ab-cd": "ABCD", // 문자 포함 시 키도 따옴표로 감싸야 함
  "s p a c e": "Space",
};

// 대괄호 프로퍼티 접근 연산자로만 가능
// console.log(obj.1, obj."ab-cd", obj."s p a c e");
// 이런식의 접근은 불가능

console.log(obj[1], obj["ab-cd"], obj["s p a c e"]);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 표현식으로 키값 정의하기
// 동적으로 작성 가능
let idx = 0;
const obj2 = {
  ["key-" + ++idx]: `value-${idx}`,
  ["key-" + ++idx]: `value-${idx}`,
  ["key-" + ++idx]: `value-${idx}`,
  [idx ** idx]: "POWER",
};

console.log(obj2);
// 실행결과
// {
//     '27': 'POWER',
//     'key-1': 'value-1',
//     'key-2': 'value-2',
//     'key-3': 'value-3'
//   }

// 만약 객체나 배열을 키값으로 사용하는 경우

const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj3 = {
  [objKey]: "객체를 키값으로",
  [arrKey]: "배열을 키값으로",
};
console.log(obj3);
console.log(obj3[objKey], obj3[arrKey]);

//실행결과
// { '[object Object]': '객체를 키값으로', '1,2,3': '배열을 키값으로' }
// 객체를 키값으로 배열을 키값으로

// 이렇게 출력해도 같은 결과가 나온다..
console.log(
  obj3[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체를 넣어줬다
  obj3["1,2,3"] // 문자열 키로 접근
);
// 실행결과
// 객체를 키값으로 배열을 키값으로

// 이처럼 내용이 다른 객체와 배열을 문자열로 접근해도
// 동일하게 출력되는 상황
// 키의 기능역활을 제대로 못하는 것

// 객체 키는 이렇게도 접근이 가능해진다
console.log(obj3["[object Object]"]);
// 실행결과
// 객체를 키값으로

// 프로퍼티 삭제
const person1 = {
  name: "홍길동",
  age: 24,
  school: "한국대",
  major: "컴퓨터공학",
};

console.log(person1);

delete person1.age;
console.log(person1);
delete person1["major"];
console.log(person1);

// 없는 속성을 삭제해도 오류가 발생하지는 않음
delete person1.hobby;
console.log(person1);

// 실행결과
// { name: '홍길동', age: 24, school: '한국대', major: '컴퓨터공학' }
// { name: '홍길동', school: '한국대', major: '컴퓨터공학' }
// { name: '홍길동', school: '한국대' }
// { name: '홍길동', school: '한국대' }

// 키의 동적 사용
const product1 = {
  name: "노트북",
  color: "gray",
  price: 800000,
};

function addModifyProperty(obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행

  // 위와 같이 사용하면 인수로 받아온 key가 아닌
  // key 값을 생성하게됨
  // {name: '노트북', price: 750000, inch: 16, key: 16}
  obj[key] = value;
}
function deleteProperty(obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  // 위와 마찬가지 이유
  delete obj[key];
}

addModifyProperty(product1, "inch", 16);
console.log(product1);
// inch라는 키값이 없음으로 생성
addModifyProperty(product1, "price", 750000);
// price 키가 있음으로 수정 됨
console.log(product1);

// 삭제 함수 불러와서 color 키를 삭제
deleteProperty(product1, "color");
console.log(product1);

// 실행결과
// { name: '노트북', color: 'gray', price: 800000, inch: 16 }
// { name: '노트북', color: 'gray', price: 750000, inch: 16 }
// { name: '노트북', price: 750000, inch: 16 }

// es6 추가 문법
const x = 1,
  y = 2;

// 기존에는 속성(key)과 변수명이 같이 중복해서 작성해야 했는데
const obj4 = {
  x: x,
  y: y,
};

console.log(obj4); // { x: 1, y: 2 }

// es6에서는 자동으로 키값을 할당함
const obj5 = { x, y };

console.log(obj5); // { x: 1, y: 2 }

// 실행결과
// { x: 1, y: 2 }
// { x: 1, y: 2 }

// 사용방법
// 기존 방식
// function createProduct(name, price, quantity) {
//     return { name : name, price :price, quantity :quantity };
//   }
// es6 방식
function createProduct(name, price, quantity) {
  // name, price, quantity 파라매터가 키의 이름이됨
  return { name, price, quantity };
}

const product2 = createProduct("선풍기", 50000, 50);
const product3 = createProduct("청소기", 125000, 32);

console.log(product2, product3);
//실행결과
// { name: '선풍기', price: 50000, quantity: 50 } { name: '청소기', price: 125000, quantity: 32 }

// 일반 함수 프로퍼티 정의
// 메서드 method - 객체에 축약표현으로 정의된 함수 프로퍼티

const person = {
  name: "홍길동",

  salutate: function (formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  },
};
console.log(person.salutate(true)); // 안녕하십니까, 홍길동입니다.

// 주요내용
// 이전에는 객체에 축약표현으로 정의된 함수를 모두 메서드라고 불렀지만
// es6에서의 메서드는
 // 아래와 같은 방식으로 선언한 함수만 메서드로 부르기로 함

const person2 = {
  name: "홍길동",
  salutate(formal) {
    return formal
      ? `안녕하십니까, ${this.name}입니다.`
      : `안녕하세요, ${this.name}이에요.`;
  },
};
console.log(person2.salutate(true));
