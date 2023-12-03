// 접근자 프로퍼티 Property accessors

// Getter/Setter 프로퍼티

const person1 = {
  // 데이타 프로퍼티
  age: 17,

  get koreanAge() {
    return this.age + 1;
  },

  set koreanAge(krAge) {
    this.age = krAge - 1;
  },
};
// 프로퍼티 처럼 사용할 수 있다
console.log(person1, person1.koreanAge);

person1.koreanAge = 20;

console.log(person1, person1.koreanAge);

//{ age: 17, koreanAge: [Getter/Setter] } 18
// { age: 19, koreanAge: [Getter/Setter] } 20

// 클래스에서 사용
//getter
// 반드시 값을 반환해야 함
// 특정 프로퍼티(들)를 원하는 방식으로 가공하여 내보낼 때 사용

// setter
// setter는 하나의 인자를 받음
// 특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용

class YalcoChicken {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }

  get chainTitle() {
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo) {
    // 타입이 넘버일때와 0이랑 같거나 작을때 처리 안함
    if (typeof chainNo !== "number") return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}

const chain1 = new YalcoChicken("판교", 3);
console.log(chain1.chainTitle);
//  3호 판교점

chain1.chainNo = "4";
console.log(chain1);
// YalcoChicken { name: '판교', no: 3 }

chain1.chainNo = -1;
console.log(chain1);
// YalcoChicken { name: '판교', no: 3 }

chain1.chainNo = 4;
console.log(chain1);
// YalcoChicken { name: '판교', no: 4 }

// 필드이름과 setter의 이름이 같을때
// 오류 예제
// class YalcoChicken2 {
//   constructor(name, no) {
//     this.name = name;
// 여기서 접근자 프로퍼티를 가르키게됨
// 즉 set no 를 가르키기 때문에 무한반복 오류가 발생함
//     this.no = no;
//   }
//   get no() {
//     return this.no + "호점";
//   }

//   set no(no) {
//     this.no = no;
//   }
// }
// const chain2 = new YalcoChicken2("판교", 3); // ⚠️ 오류 발생!
// // 무한반복 오류
// property_accessors.js:72
//     this.no = no;
//             ^
// RangeError: Maximum call stack size exceeded

// 해결책
class YalcoChicken2 {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  get no() {
    return this._no + "호점";
  }
  set no(no) {
    this._no = no;
  }
}

const chain2 = new YalcoChicken2("광명", 3);
console.log(chain2);
console.log(chain2.no);
chain2.no = 4;
console.log(chain2);
console.log(chain2.name);
// 실행결과
// YalcoChicken2 { name: '광명', _no: 3 }
// 3호점
// setter와는 다른 필드명을 사용하여 자기반복호출을 방지
// constructor의 no는 setter를 가리키고 실제 필드명은 _no가 됨
// 그러나 이방법에는 chain2._no 처럼 접근 가능함

// II. 은닉
// 💡 캡슐화 encapsulation
// 객체지향의 주요 요소 중 하나 - 객체 내부의 값을 감추는(은닉) 것
// 인스턴스의 프로퍼티 값을 함부로 열람하거나 수정하지 못하도록
// 자바스크립트의 필드는 기본적으로 public 은닉되지 않음

class Employee {
  #name = "";
  #age = 0;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp1 = new Employee("김복동", 32);

console.log(emp1);
// Employee {}

// 클래스 내에서만 private 필드에 접근 가능
class Employee2 {
  #name = "";
  #age = 22;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name() {
    // [n]: n + 1 번째 글자를 반환
    return this.#name[0] + "모씨";
  }
  get age() {
    return this.#age - (this.#age % 10) + "대";
  }
  set age(age) {
    if (typeof age === "number" && age > 0) {
      this.#age = age;
    }
  }
  getOlder(years) {
    this.#age += years;
  }
}

const  emp0 = new Employee2();
console.log(emp0.age);

const emp2 = new Employee2("김복동", 22);
console.log(emp2.name, emp2.age);
// 김모씨 20대

emp2.age = 0;
console.log(emp2.age);
// 20대

emp2.age = 35;
console.log(emp2.age);
// 30대

emp2.getOlder(20);
console.log(emp2.age);
// 50대

// 주요 내용
// constructor, 접근자 프로퍼티 또는 기타 함수에서 접근 가능
// 인스턴스에서 바로 접근은 못하도록 은닉, 위 방법들로 제어