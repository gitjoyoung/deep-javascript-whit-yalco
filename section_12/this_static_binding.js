// 객체의 메서드 종류별 비교

const obj = {
  // function 선언 함수
  func1: function () {
    return true;
  },

  // 메서드
  func2() {
    return true;
  },

  // 화살표 함수
  func3: () => true,
};

console.log(obj.func1(), obj.func2(), obj.func3());
// true true true

// 로그로 출력된 형태 비교
console.log(obj.func1);
console.log(obj.func2);
console.log(obj.func3);

// [Function: func1]
// [Function: func2]
// [Function: func3]

const func1 = new obj.func1();
// const func2 = new obj.func2();
// const func3 = new obj.func3();

// function 선언 함수만 생성자로 활용 가능 - 더 많은 기능이 있고 무겁다는 의미

// 화살표 함수와 this
// function 함수나 메서드의 동적 바인딩과 다르게 동작
// 함수가 어디서 선언되었는가에 따름 - ⭐️ 가장 근접한 상위 스코프에 바인딩 고정
// 즉 this를 정적으로 바인딩함

// 객체 리터럴에서
// ⚠️ 객체 리터럴의 화살표 함수는 가리키는 기본 스코프가 나머지 둘과 다름

const obj2 = {
  x: 1,
  y: 2,

  func1: function () {
    console.log("1.", this);
  },
  func2() {
    console.log("2.", this);
  },
  func3: () => {
    console.log("3.", this);
  },
};
// this가 해당 객체를 가리킴
obj2.func1();
obj2.func2();
// 1. {
//   x: 1,
//   y: 2,
//   func1: [Function: func1],
//   func2: [Function: func2],
//   func3: [Function: func3]
// }
// 2. {
//   x: 1,
//   y: 2,
//   func1: [Function: func1],
//   func2: [Function: func2],
//   func3: [Function: func3]
// }

// 💡 this가 상위 스코프를 가리킴
obj2.func3();
// 3. {}

const outer = {
  a: true,
  b: false,

  func: function () {
    const inner = {
      x: 1,
      y: 2,

      func1: function () {
        console.log("1.", this);
      },
      func2() {
        console.log("2.", this);
      },
      func3: () => {
        console.log("3.", this);
      },
    };

    // this가 inner를 가리킴
    inner.func1();
    inner.func2();

    // this가 outer를 가리킴
    inner.func3();
  },
};

outer.func();

// 1. {
//   x: 1,
//   y: 2,
//   func1: [Function: func1],
//   func2: [Function: func2],
//   func3: [Function: func3]
// }
// 2. {
//   x: 1,
//   y: 2,
//   func1: [Function: func1],
//   func2: [Function: func2],
//   func3: [Function: func3]
// }
// 3. { a: true, b: false, func: [Function: func] }

// 생성자 함수와 클래스에서
// 기본적으로는 가리키는 대상이 동일 (해당 인스턴스)
// ⭐ 동적으로 바인딩하는 타 방식과의 차이 확인
// 찌개는 function 선언 함수와 메서드로
// 볶음밥은 화살표 함수로

function Korean() {
  this.favorite = "김치";

  this.makeStew = function (isHot) {
    return `${isHot ? "매운" : "순한"} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => {
    return `${isHot ? "매운" : "순한"} ${this.favorite}볶음밥`;
  };
}

function Italian() {
  this.favorite = "피자";
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true));
console.log(korean.fryRice(true));
// 매운 김치찌개
// 매운 김치볶음밥

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false));
console.log(italian.fryRice(false));
// 순한 피자찌개
// 순한 김치볶음밥

// ♻️ 새로고침 후 실행
class KoreanClass {
  constructor() {
    this.favorite = "김치";
    this.fryRice = (isHot) => {
      return `${isHot ? "매운" : "순한"} ${this.favorite}볶음밥`;
    };
  }
  makeStew(isHot) {
    return `${isHot ? "매운" : "순한"} ${this.favorite}찌개`;
  }
}

class ItalianClass {
  constructor() {
    this.favorite = "피자";
  }
}

const korean2 = new KoreanClass();
const italian2 = new ItalianClass();

console.log(korean2.makeStew(true));
console.log(korean2.fryRice(true));
// 매운 김치찌개
// 매운 김치볶음밥

italian2.makeStew = korean2.makeStew;
italian2.fryRice = korean2.fryRice;

console.log(italian2.makeStew(false));
console.log(italian2.fryRice(false));
// 순한 피자찌개
// 순한 김치볶음밥

// call, apply, bind의 this 인자 무시됨

console.log(korean2.fryRice.call({ favorite: "된장" }, true));
console.log(korean2.fryRice.apply({ favorite: "된장" }, [true]));
console.log(korean2.fryRice.bind({ favorite: "된장" }, true)());
// 매운 김치볶음밥
// 매운 김치볶음밥
// 매운 김치볶음밥

// Node.js 파일 실행시 빈 객체가 출력된 이유
// Node.js는 각 파일을 모듈 (추후 다룰 것, 기본적으로 객체) 로 만들어 실행
// 파일 내 모든 코드는 모듈의 메서드 안으로 들어가 실행됨 - 즉 객체 내 함수의 코드가 됨
// Node.js 코드파일로 실행해 볼 것

// this가 모듈 객체(현재 비어있음)를 가리킴
console.log("0.", this);
// 0. {}

function fun1() {
  // this가 전역 객체를 가리킴
  console.log("1.", this);
}

function fun2() {
  "use strict";

  // this가 undefined를 가리킴
  console.log("2.", this);
}

const fun3 = () => {
  // 💡 this가 모듈 객체(이 함수의 상위 스코프)를 가리킴
  console.log("3.", this);
};

fun1();
fun2();
fun3();
// 1. <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
// }

// 2. undefined

// 3. {}