// JSON JavaScript Object Notation
// 복잡한 구조를 가질 수 있는 데이터를 한 줄의 문자열로 표현
// 서버와 클라이언트 등 데이터들을 주고받는 주체들 사이에 널리 사용

// JSON 객체의 정적 메서드
// 1. stringify - 객체를 문자열로 직렬화 serialize
// 👉 MDN 문서 보기

const person = {
  name: "김달순",
  age: 23,
  languages: ["Korean", "English", "French"],
  education: {
    school: "한국대",
    major: ["컴퓨터공학", "전자공학"],
    graduated: true,
  },
};

const personStr = JSON.stringify(person);

console.log(typeof personStr);
//   string

console.log(personStr);
// {"name":"김달순","age":23,"languages":["Korean","English","French"],"education":{"school":"한국대","major":["컴퓨터공학","전자공학"],"graduated":true}}

// 데이터 형태별 직렬화 결과

[
  JSON.stringify(1),
  JSON.stringify(Infinity), // ⚠️
  JSON.stringify(NaN), // ⚠️
  JSON.stringify("가나다"),
  JSON.stringify(true),
  JSON.stringify(null),
  JSON.stringify(undefined),
  JSON.stringify([1, 2, 3]),
  JSON.stringify({ x: 1, y: 2 }),
  JSON.stringify(new Date()), // ⚠️
].forEach((i) => console.log(i));
// 1
// null
// null
// "가나다"
// true
// null
// undefined
// [1,2,3]
// {"x":1,"y":2}
// "2023-12-25T07:14:13.826Z"

//  Symbol - 직렬화되지 않음
console.log(JSON.stringify(Symbol("hello"))); // ⚠️
// undefined

//  BigInt - 오류 발생
// console.log( JSON.stringify(1n) ); // ⚠️

// 값이 함수인 프로퍼티는 직렬화되지 않음
const obj = {
  x: 1,
  y: 2,
  z: function () {
    return this.x + this.y;
  },
};
console.log(obj.z());
//   3

const objStr = JSON.stringify(obj);
console.log(objStr);

// {"x":1,"y":2}
const func1 = (a, b) => a + b;
function func2() {
  console.log("HELLO");
}

const func1Str = JSON.stringify(func1);
const func2Str = JSON.stringify(func2);

console.log(func1Str);
console.log(func2Str);
// undefined
// undefined

// 2번째 인자: replacer 함수
// 직렬화될 방식을 지정

const obj2 = {
  a: 1,
  b: "2",
  c: 3,
  d: true,
  e: false,
};

// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj2, (key, value) => {
  // key가 존재하고, 'a'의 아스키 코드 a의 경우 97 보다 작거나
  // 또는 'c'의 아스키 코드보다 큰 경우('c'보다 아스키코드가 큰 문자 )
  // 결론은 key 값이 있을때 a~ c 안에 있는 문자만 허용한다는 말
  if ((key && key < "a") || key > "c") {
    // 언디파인으로 반환하면 해당 프로퍼티 생략
    return undefined;
    // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
    // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
    // key와 value를 로그로 출력해보며 확인해 볼 것
  }
  // 타입이 숫자인 경우에만
  if (typeof value === "number") {
    return value * 10;
  }
  return value;
});
console.log(objStr1);
// {"a":10,"b":"2","c":30}

// 2. 반환한 key의 배열 매개변수
const objStr2 = JSON.stringify(obj2, ["b", "c", "d"]);
console.log(objStr2);
// {"b":"2","c":3,"d":true}

// 3번째 인자: 인덴트

const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

[
  JSON.stringify(obj3, null),
  JSON.stringify(obj3, null, 1),
  JSON.stringify(obj3, null, 2),
  JSON.stringify(obj3, null, "\t"),
].forEach((i) => console.log(i));

//   {
//     "a": 1,
//     "b": {
//      "c": 2,
//      "d": {
//       "e": 3
//      }
//     }
//    }
//    {
//      "a": 1,
//      "b": {
//        "c": 2,
//        "d": {
//          "e": 3
//        }
//      }
//    }
//    {
//        "a": 1,
//        "b": {
//            "c": 2,
//            "d": {
//                "e": 3
//            }
//        }
//    }

const obj4 = {
  x: 1,
  y: 2,
  toJSON: function () {
    return "훗, 나를 직렬화해보겠다는 건가";
  },
};

console.log(JSON.stringify(obj4));
// "훗, 나를 직렬화해보겠다는 건가"

// parse - 역직렬화

[
  JSON.parse("1"),
  JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
  JSON.parse("true"),
  JSON.parse("null"),
  JSON.parse("[1, 2, 3]"),
  JSON.parse('{"x": 1, "y": 2}'), // ⚠️ key도 따옴표로 감싸야 함
].forEach((i) => console.log(i));
//   1
// 가나다
// true
// null
// [ 1, 2, 3 ]
// { x: 1, y: 2 }


// 2번째 인자: receiver 함수
const objStr3 = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';

const obj5 = JSON.parse(objStr3, (key, value) => {
  if (key === "c") {
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === "number") {
    return value * 100;
  }
  return value;
});

console.log(obj5); // ⚠️ 내부까지 적용(배열 확인해 볼 것)

// { a: 100, b: 'ABC', d: [ 100, 200, 300 ] }
