
// 주요 개념 
// 콘솔 로그는 자바스크립트의 기능이 아니라 환경의 기능이다
// 런타임 환경에 따라 콘솔 로그의 출력 방식이 다르다
// 브라우저 환경에서는 브라우저의 콘솔에 출력된다
// 

console.log(this);


console.log(" 로그에_출력할_값 ");
console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});
console.log({name: '홍길동', age: 20, married: false});
console.log('Hi!', 100, true, [1, 2, 3]);

// 실행 결과
// Hello World!
// 1
// true
// { name: '홍길동', age: 20, married: false }
// { name: '홍길동', age: 20, married: false }
// Hi! 100 true [ 1, 2, 3 ]