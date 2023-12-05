// 빌트인 전역 프로퍼티
// 스스로 다른 프로퍼티나 메서드를 갖지 않고 값만 반환

console.log(globalThis.Infinity);
console.log(globalThis.NaN);
console.log(globalThis.undefined);
// Infinity
// NaN
// undefined

console.log(
  globalThis == globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis,
  globalThis == globalThis.globalThis.globalThis.globalThis
);
// true true true

// Infinity, NaN, undefined 등의 원시값들은 이 프로퍼티들을 가리킴
// 💡 null은 포함되지 않음 - 가리키는 값이 없음을 의미하므로...
// globalThis 스스로에 대한 참조를 프로퍼티로 포함

//  eval - 문자열로 된 코드를 받아 실행
// 사용하지 말 것
// 값을 반환하는 코드(표현식)이라면 해당 값을 반환

const x = eval("1 + 2 + 3");

// 객체나 함수의 리터럴은 괄호로 감싸야 함
const obj = eval("({a: 1, b: 2})");

console.log(x, obj);
// 6 { a: 1, b: 2 }

// 표현식이 아닐 경우 해당 코드 실행
const code = `
  let x = 1;
  console.log(x++, x);
`;

eval(code);
// 1 2
// eval
// ⚠️ 매우 특별한 경우가 아닌 이상 절대 사용하지 말 것
// ☢️ 보안에 취약함
// 엔진이 코드를 최적화하지 못하므로 처리 속도가 느림

// isFinite - 유한수 여부 반환
console.log(isFinite(1), isFinite(0), isFinite("1"), isFinite(null));

// true true true true

console.log(
  isFinite(1 / 0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite("abc")
);
// false false false false false

// isNaN - NaN 여부 반환 not a number
// 숫자가 아니면
console.log(isNaN(NaN), isNaN("abcde"), isNaN({}), isNaN(undefined));
// true true true true

//   숫자로 인식될 수 없는 값 : true
// Number 타입이 아닌 경우 Number로 변환하여 평가 NaN도 타입은 Number
// 💡 뒤에 배울 Number.isNaN은 타입변환을 하지 않음

// parseFloat - 인자로 받은 값을 실수로 변환

console.log(
  parseFloat(123.4567),
  parseFloat("123.4567"),
  parseFloat(" 123.4567 ")
);
// 123.4567 123.4567 123.4567
// 문자열의 경우 앞뒤공백은 무시
console.log(
  parseFloat("123.0"),
  parseFloat("123"),
  parseFloat(" 123ABC "),
  parseFloat([123, 456, 789])
);
// 123 123 123 123
// 숫자로 시작할 경우 읽을 수 있는 부분까지 숫자로 변환
// 배열의 경우 첫 요소가 숫자면 해당 숫자 반환
console.log(
  parseFloat("ABC123"),
  parseFloat({ x: 1 }),
  parseFloat([]),
  parseFloat(["a", 1, true])
);

// NaN NaN NaN NaN
// 기타 숫자로 변환이 안 되는 경우 NaN 반환

// parseInt - 인자로 받은 값을 정수(타입은 실수)로 변환
console.log(
  parseInt(123),
  parseInt("123"),
  parseInt(" 123.4567 "),
  parseInt("345.6789")
);
//   123 123 123 345
// 소수점 뒤로 오는 숫자는 버림 반올림하지 않음

console.log(parseInt("abc"), parseInt("{}"), parseInt("[]"));
// NaN NaN NaN

// 두 번째 인자로 숫자(2~36) 넣으면
// 두번째 진수 형식으로 해석함
console.log(
  parseInt("11"),
  parseInt("11", 2),
  parseInt("11", 8),
  parseInt("11", 16),
  parseInt("11", 32),

  parseInt("11", 37),
  parseInt("11", "A")
);
// 11 3 9 17 33 NaN 11

// 서버 통신
// encodeURI, encodeURIComponent
// URI(인터넷 자원의 주소)는 🔗 아스키 문자 셋으로만 구성되어야 함
// 아스키가 아닌 문자(한글 등)와 일부 특수문자를 포함한 URI를 유효하게 인코딩
const searchURI = "https://www.google.com/search?q=얄코";
const encodedURI = encodeURI(searchURI);
console.log(encodedURI);
// https://www.google.com/search?q=%EC%96%84%EC%BD%94

// encodeURIComponent 는 아스키가 아닌 문자를 전부 변환
const encodedKeyword = encodeURIComponent(searchURI);
console.log(encodedKeyword);
// https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%EC%96%84%EC%BD%94

// 들어갈 요소를 인코딩 하여 사용
const encodedKeyword2 = encodeURIComponent('얄코');
const searchURI2 = `https://www.google.com/search?q=${encodedKeyword2}`;
console.log(searchURI2);
// https://www.google.com/search?q=%EC%96%84%EC%BD%94


// 명확한 차이
const raw = '?q=얄코';
console.log(encodeURI(raw));
console.log(encodeURIComponent(raw));
// ?q=%EC%96%84%EC%BD%94
// %3Fq%3D%EC%96%84%EC%BD%94


// 디코딩
// decodeURI, decodeURIComponent
const encodedURI3 = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI3 = decodeURI(encodedURI3);

console.log(decodedURI3);
// https://www.google.com/search?q=얄코

const encodedComp = '%EC%96%84%EC%BD%94';
const decodedComp = decodeURI(encodedComp);

console.log(decodedComp);
// 얄코