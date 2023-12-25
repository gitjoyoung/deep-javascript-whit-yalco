// 프로퍼티 어트리뷰트 property attributes
// 객체의 프로퍼티가 생성될 때 엔진에 의해 자동 정의되는 상태

const person = {
  // ⭐️ 1. 데이터 프로퍼티들
  fullName: "홍길동",
  ageInNumber: 25,

  // ⭐️ 2. 접근자 프로퍼티들
  get name() {
    return (
      this.fullName
        .split("")
        // index가 0일 경우에만 반환 외에는 * 처리
        .map((letter, idx) => (idx === 0 ? letter : "*"))
        .join("")
    );
  },
  get age() {
    return this.ageInNumber + "세";
  },
  set age(age) {
    this.ageInNumber = Number(age);
  },
};

console.log(person.name, person.age);
// 홍** 25세

// 데이터 프로퍼티의 어트리뷰트를 직접 넣지 않았을때
// [[Value]]	프로퍼티의 값
// 기본값 :   undefined

// [[Writable]]	값 갱신 가능 여부 - false일 경우 읽기 전용
// 기본값: false

// [[Enumerable]]	열거(for ... in문, Object.keys 사용) 가능 여부
// 기본값: false

// [[Configurable]]	프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부
// 기본값: false

// 접근자 프로퍼티의 어트리뷰트

// [[Get]]	객체로부터 값을 읽을 때 호출되는 getter 함수
// 기본값 :   undefined

// [[Set]]	객체에 값을 저장할 때 호출되는 setter 함수
// 기본값 :   undefined

// [[Enumerable]]	열거(for ... in문, Object.keys 사용) 가능 여부
// 기본값 : false

// [[Configurable]]	프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부
// 기본값 : false

// Object의 프로퍼티 어트리뷰트 관련 정적 메서드들

// 1. getOwnPropertyDescriptor, getOwnPropertyDescriptors
// 객체 프로퍼티 어트피뷰트들의 설명자 descriptor를 반환

const person2 = {
  // ⭐️ 1. 데이터 프로퍼티들
  fullName: "홍길동",
  ageInNumber: 25,

  // ⭐️ 2. 접근자 프로퍼티들
  get name() {
    return this.fullName
      .split("")
      .map((letter, idx) => (idx === 0 ? letter : "*"))
      .join("");
  },
  get age() {
    return this.ageInNumber + "세";
  },
  set age(age) {
    this.ageInNumber = Number(age);
  },
};

// 특정 프로퍼티를 지정하여 반환
console.log("1.", Object.getOwnPropertyDescriptor(person2, "fullName"));
// 1. { value: '홍길동', writable: true, enumerable: true, configurable: true }

console.log("2.", Object.getOwnPropertyDescriptor(person2, "ageInNumber"));
// 2. { value: 25, writable: true, enumerable: true, configurable: true }

console.log(
  "3.", // set: undefined
  Object.getOwnPropertyDescriptor(person2, "name")
);
// 3. {
//     get: [Function: get name],
//     set: undefined,
//     enumerable: true,
//     configurable: true
//   }
console.log(
  "4.", // get, set 모두 있음
  Object.getOwnPropertyDescriptor(person2, "age")
);

// 4. {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//   configurable: true
// }

// 모든 프로퍼티의 어트리뷰트 객체로 묶어 반환
console.log(Object.getOwnPropertyDescriptors(person));

//   {
//     fullName: {
//       value: '홍길동',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     ageInNumber: { value: 25, writable: true, enumerable: true, configurable: true },
//     name: {
//       get: [Function: get name],
//       set: undefined,
//       enumerable: true,
//       configurable: true
//     },
//     age: {
//       get: [Function: get age],
//       set: [Function: set age],
//       enumerable: true,
//       configurable: true
//     }
//   }

// defineProperty, defineProperties
// 객체의 프로퍼티를 정의

const person3 = {};

// 한 프로퍼티씩 각각 설정
Object.defineProperty(person3, "fullName", {
  value: "홍길동",
  writable: true,
  // 💡 누락한 어트리뷰트는 기본값으로 자동생성
});

Object.defineProperty(person3, "name", {
  get() {
    return this.fullName
      .split("")
      .map((letter, idx) => (idx === 0 ? letter : "*"))
      .join("");
  },
});

console.log(person3, person3.name);
// {} 홍**

console.log(
  // ⚠️ 누락된 어트리뷰트들 확인해볼 것
  Object.getOwnPropertyDescriptors(person3)
);
// {
//   fullName: {
//     value: '홍길동',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   },
//   name: {
//     get: [Function: get],
//     set: undefined,
//     enumerable: false,
//     configurable: false
//   }
// }

// 여러 프로퍼티를 객체 형식으로 한꺼번에 설정
Object.defineProperties(person, {
  ageInNumber: {
    value: 25,
    writable: true,
  },
  age: {
    get() {
      return this.ageInNumber + "세";
    },
    set(age) {
      this.ageInNumber = Number(age);
    },
  },
});

person.age = 30;

console.log(person, person.age);
// {
//   fullName: '홍길동',
//   ageInNumber: 30,
//   name: [Getter],
//   age: [Getter/Setter]
// } 30세

console.log(Object.getOwnPropertyDescriptors(person));

// {
//   fullName: {
//     value: '홍길동',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   ageInNumber: { value: 30, writable: true, enumerable: true, configurable: true },
//   name: {
//     get: [Function: get name],
//     set: undefined,
//     enumerable: true,
//     configurable: true
//   },
//   age: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: true
//   }
// }

// 적용 예

const person4 = {
  fullName: "홍길동",
  ageInNumber: 25,
};

// 💡 value를 전우치로 바꾸면
Object.defineProperty(person4, "fullName", {
  value: "전우치",
});

console.log(person4);
// { fullName: '전우치', ageInNumber: 25 }

console.log(Object.keys(person4));
// [ 'fullName', 'ageInNumber' ]


// 💡 enumerable을 false로 바꾸면
Object.defineProperty(person4, "fullName", {
  enumerable: false,
});

console.log(Object.keys(person4));

// [ 'ageInNumber' ]

console.log(Object.getOwnPropertyDescriptors(person4));
// {
//   fullName: {
//     value: '전우치',
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   ageInNumber: { value: 25, writable: true, enumerable: true, configurable: true }
// }


// 💡 seal: configurable을 false로 바꿈
Object.seal(person4);

console.log(Object.getOwnPropertyDescriptors(person4));

// {
//   fullName: {
//     value: '전우치',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   },
//   ageInNumber: { value: 25, writable: true, enumerable: true, configurable: false }
// }

console.log(Object.getOwnPropertyDescriptors(person4));
// {
//   fullName: {
//     value: '전우치',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   },
//   ageInNumber: { value: 25, writable: true, enumerable: true, configurable: false }
// }


// 💡 freeze: configurable과 writable을 false로 바꿈
Object.freeze(person4);

console.log(Object.getOwnPropertyDescriptors(person4));
// {
//   fullName: {
//     value: '전우치',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   ageInNumber: { value: 25, writable: false, enumerable: true, configurable: false }
// }
