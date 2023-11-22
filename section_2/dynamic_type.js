// 자료형의 정적 , 동적 타입 
// 자바스크립트는 동적 타입 언어이다.
// 변수를 선언할 때 자료형을 미리 정하지 않고,
// 값에 따라서 자료형이 동적으로 결정된다는 의미이다.


let age = 17;

console.log(age);
console.log(typeof age);

age = '열일곱';

console.log(age);
console.log(typeof age);


// 실행 결과
// 17
// number
// 열일곱
// string

// 중요내용 
// 자바스크립트는 특정 값이 할당된 변수에 다른 자료형을 넣는 것이 자유롭지만 그만큼 자료형 관련 오류들에 취약함
// 자료형을 엄격하게 체크하는 타입스크립트가 나오게 된 이유 중 하나이다.


// 함수에서도 마찬가지로 작동한다
// 주어진 문자열을 대문자로 바꾸는 함수
function getUpperCase(str) {
    return str.toUpperCase();
  }
  
console.log(getUpperCase('hello'));
// 실행 결과
// HELLO

console.log(getUpperCase(1));
// 실행 결과
//TypeError: str.toUpperCase is not a function
// 숫자 1을 넣었는데 에러가 발생함
// 자바스크립트는 동적 타입 언어이기 때문에
// 함수를 호출할 때 인수의 자료형을 체크하지 않음