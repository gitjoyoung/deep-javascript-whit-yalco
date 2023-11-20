/*
변수
데이타를 담는 주머니
var, let, const 키워드를 사용해서 변수를 선언할 수 있다.
var는 역사의 뒤안길로
*/

var x = 1;
var x = 2;
console.log(x);
/* 

실행 결과 : 2 


var 는 이렇게 이중 선언이 가능하고 에러가 발생하지 않는다.
let, const는 이중 선언 불가능

let과 const를 사용할 것
let: 값을 바꿀 수 있는 변수 letiable : 변수
const: 값을 바꿀 수 없는 변수 constance : 상수
*/

// 변수 상수 사용 예시
// 바뀌지 않는값 const
// 바뀔 수 있는 값 let

const SALUTATION = "Hello,";
let person = "철수";
person = "영희";
console.log(SALUTATION, person);

//  실행 결과 : Hello, 영희

let value;
console.log(value);

/* 실행 결과
 undefined
 주요 개념
변수는 선언과 동시에 undefined로 초기화 된다.
*/

let value2 = undefined;
if (value2 === null) {
    // 이 블록은 실행되지 않음, value는 undefined이므로 null과 정확히 같지 않음
}
if (value2 == null) {
    // 이 블록은 실행됨, == 연산자는 타입 변환을 수행하므로 null과 undefined를 동등하게 취급
}

// 주요 개념
// undefined는 타입이자 값이다.
// undefined는 변수를 초기화 할 때 사용한다.
// null은 타입이자 값이다.
// null은 주로 무언가가 있는데 사용할 준비가 덜 된 상태를 나타낼 때 사용한다.
// null은 typeof 연산자를 사용하면 object를 반환한다.


// 한줄에 여러개의 선언도 가능하다
let a = 1,
  b = 2,
  c = 3;
const X = 4,
  Y = 5,
  Z = 6;

console.log(a, b, c);
console.log(X, Y, Z);
// 실행결과
// 1 2 3
// 4 5 6


let xx = 1;
let yy = xx;
console.log('변경 전', xx, yy);
xx = 'Hello!';
console.log('변경 후', xx, yy);

// 실행결과
// 변경 전 1 1
// 변경 후 Hello! 1
// 주요개념
// xx 는 1이라는 값을 가지고 있고 yy는 xx의 값을 복사해서 가지고 있다.
// xx의 값을 변경해도 yy의 값은 변경되지 않는다.
// yy는 xx 가르키는 메모리상 위치를 복사해서 가지고 있기 때문에 xx의 값이 변경되어도 yy의 값은 변경되지 않는다.
// xx에 Hellow의 값을 넣고 재할당을 하면 Hellow 를 가르키는 주소로 변경된다.



// 예약어 (Reserved Words)
// 예약어란?
// 자바스크립트에서 이미 문법적인 용도로 사용하고 있는 단어들
// 변수명으로 사용할 수 없다.

// const let = 1;
// let typeof = 2;
// 예약어를 변수명으로 사용할 수 없다.