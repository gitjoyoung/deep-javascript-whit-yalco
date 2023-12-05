// 표준 빌트인 객체 standard built-in objects

// ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
// 전역 프로퍼티로 제공됨 - globalThis등을 붙이지 않고 바로 사용 가능

// 노드 환경에 서는 빌트인 객체를 출력해주지 않음
console.log(globalThis);

// 그러나 요소들로 갖고 있는 것은 확인 가능

console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);

// Infinity
// [Function: isNaN]
// [Function: Object]

// 콘솔에서 프로퍼티와 프로토타입을 펼쳐 확인해보자.

const str = new String("abcde");
const num = new Number(123.4567);
const bool = new Boolean(true);

console.log(typeof str, str);
console.log(typeof num, num);
console.log(typeof bool, bool);

//object [String: 'abcde']
// object [Number: 123.4567]
// object [Boolean: true]

// Number, String, Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
// 원시값을 필요시 래퍼 객체로 감싸서 wrap 그것의 인스턴스로 만들어 기능 실행
// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생
// ⭐️ 해당 기능 사용 후에는 원시 객체로 돌아감 - 메모리 절약

// 래퍼 객체 wrapper object

const str2 = "abcde";
console.log(str2.length);
console.log(typeof str2, str2);
// 5
// string abcde

const str3 = new String("abcde");
const num3 = new Number(123.4567);
const bool3 = new Boolean(true);

console.log(str3.valueOf());
console.log(num3.valueOf());
console.log(bool3.valueOf());
// abcde
// 123.4567
// true
