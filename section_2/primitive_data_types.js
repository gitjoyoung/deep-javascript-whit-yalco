// 자바스크립트의 원시 자료형
// 원시 자료형에는 6가지가 있다.
// string , number , boolean , null , undefined , symbol

const a = true
const b = 123.45
const c = '안녕하세요!';
const d = null;
const e = undefined;
const f = Symbol('hello');

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);

// 실행 결과
// true boolean
// 123.45 number
// 안녕하세요! string
// null object
// undefined undefined
// Symbol(hello) symbol


// 불리언 자료형
// true flase 두가지 값만 가진다.
const aa = 1 > 2;
const bb = 1 < 2;

console.log(aa, typeof aa);
console.log(bb, typeof bb);
// 실행 결과
// false boolean
// true boolean
// 주요 개념
// 직접 할당되기보다는 반환값으로 프로그램 곳곳에서 활용됨


// 숫자 자료형
// 정수, 실수, 음수, NaN, Infinity, -Infinity
// number로 통일해서 사용한다.

// 정수
let integer = 100;
// 실수
let real = 12.34;
// 음수
let negative = -99;

console.log(typeof integer,typeof real,typeof negative);

// 실행 결과
// number number number
// 주요 개념
// 자바스크립트는 숫자를 하나의 자료형으로 취급한다.
// 정수와 실수를 구분하지 않는다.
// 숫자는 number 타입이다.
// 숫자에는 정수, 실수, 음수, NaN, Infinity, -Infinity가 있다.

// 문자열
// 문자열은 작은따옴표, 큰따옴표, 백틱으로 표현한다.
// 문자열은 string 타입이다.
let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);
/* 실행 결과
1. Brendan Eich 

2. 미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.*/