// 클래스
// JavaScript에서 클래스는 ES6(ECMAScript 2015)부터 도입
// Syntactic Sugar - 문법을 보다 읽기 쉽게 만들기 위해 탄생함
// 자바 등 타 언어에 익숙한 사람들을 위해 생성자 함수, 프로로타입 기반으로
// 자바스크립트 문법 타 언어의 클래스와 비슷한 문법으로 포장 해주었음
// 타 언어의 클래스와는 다른구조
// 차이 1. 클래스는 호이스팅되지 않음 (정확히는 되지만...)

// ⚠️  클래스와 생성자 함수의 동작이 동일하지는 않음
// es6 이후 만들어진 기능은 엄격 모드가 자동으로 적용 되 있음
// 그래서 생성자 함수와는 다르게 new 키워드를 붙이지 않고 사용하면 타입에러 반환
// 생성자 함수는 undefined 반환

class YalcoChicken {
  // 생성자 constructor
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    // 💡 메서드
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken("판교", 3);
const chain2 = new YalcoChicken("강남", 17);
const chain3 = new YalcoChicken("제주", 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

// 실행결과
// YalcoChicken { name: '판교', no: 3 } 안녕하세요, 3호 판교점입니다!
// YalcoChicken { name: '강남', no: 17 } 안녕하세요, 17호 강남점입니다!
// YalcoChicken { name: '제주', no: 24 } 안녕하세요, 24호 제주점입니다!

// 선언전에 호출하는 예제

// const chain1 = new YalcoChicken('판교', 3);

// class YalcoChicken {
//   constructor (name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   introduce () {
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
// }

// ReferenceError: YalcoChicken is not defined 발생

// constructor 메서드

// 인스턴스 생성시 인자를 받아 프로퍼티를 초기화함
// 클래스에 하나만 있을 수 있음 - 초과시 오류 발생
// 다른 메서드 이름을 쓸 수 없음
// 기본값 사용 가능
// 필요없을 (인자가 없을 때 등) 시 생략 가능
// ⚠️ 값을 반환하지 말 것! 생성자 함수처럼 암묵적으로 this 반환
class Person {
  // married 는 디폴트값 false를 적용해줌
  constructor(name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person("박영희", 30, true);
const person2 = new Person("오동수", 18, "결혼");
console.log(person1, person2);
// 실행 결과
// Person { name: '박영희', age: 30, married: true }
// Person { name: '오동수', age: 18, married: false }

// 인스턴스 초기화가 필요없는 클래스
class Empty {}
console.log(new Empty());

// 생성자 함수와 차이
class Dog {
  bark() {
    return "멍멍";
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark()); //Dog {} 멍멍

function Dog2() {
  this.bark = function () {
    return "멍멍";
  };
}
const badugi2 = new Dog2();
console.log(badugi2, badugi2.bark()); // Dog2 { bark: [Function (anonymous)] } 멍멍

//   Dog {} 멍멍
// Dog2 { bark: [Function (anonymous)] } 멍멍

// 필드 field
// constructor 밖에서, this.~ 없이 인스턴스의 프로퍼티 정의
// 2022 말 아직은 제안사항 (이후 🧪로 표시), 이미 다수 브라우저에서 지원
// 이후 배울 Babel로 해결 가능

// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
class Slime {
  // 키워드 없이 선언
  hp = 50;
  op = 4;
  attack(enemy) {
    enemy.hp -= this.op;
    this.hp += this.op / 4;
  }
}

const slime1 = new Slime();
const slime2 = new Slime();

console.log(slime1, slime2);

class YalcoChicken2 {
  no = 0;
  menu = { 후라이드: 10000, 양념치킨: 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`;
  }
}
const chains0 = new YalcoChicken2("(미정)");
console.log(chains0, chains0.introduce());

const chains1 = new YalcoChicken2("판교", 3);
console.log(chains1, chains1.introduce());

chains1.menu["양념치킨"] = 13000;

console.log(chains0.order("양념치킨"), chains1.order("양념치킨"));

// 실행 결과
// YalcoChicken2 {
//     no: 0,
//     menu: { '후라이드': 10000, '양념치킨': 12000 },
//     name: '(미정)'
//   } 안녕하세요, 0호 (미정)점입니다!
//   YalcoChicken2 {
//     no: 3,
//     menu: { '후라이드': 10000, '양념치킨': 12000 },
//     name: '판교'
//   } 안녕하세요, 3호 판교점입니다!
//   12000원입니다. 13000원입니다.

// 정적 static 필드와 메서드
// 정적은 메모리 측면에서 이점이 있음
class YalcoChicken3 {
  // static은 클래스 내부에서만 메모리를 차지함 값이 복사되진 않음
  // 정적 변수와 메서드
  static brand = "얄코치킨";
  static contact() {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChicken3);
console.log(YalcoChicken3.contact());


// 클래스는 함수
class Dog3 {
  bark() {
    return "멍멍";
  }
}

console.log(typeof Dog3); // function 

const 개 = Dog3; // 할당될 수 있는 일급 객체
const 바둑이 = new 개();

console.log(바둑이); // Dog3 {}