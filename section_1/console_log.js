
// 주요 개념 
// 콘솔 로그는 자바스크립트의 기능이 아니라 환경의 기능이다
// 런타임 환경에 따라 콘솔 로그의 출력 방식이 다르다
// 브라우저 환경에서는 브라우저의 콘솔에 출력된다
// Node.js 환경에서는 터미널에 출력된다

console.log(this);

// node 에서 실행시에는 아래와 같은 결과가 출력된다
// {}

// 크롬에서는 아래와 같은 결과가 출력된다
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


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

// 콘솔의 종류

console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능');

console.warn('경고 - 문제가 될 수 있는 부분');
// 특이점 : 노란색으로 표시됨
console.error('오류 - 에러 발생 상황');
// 특이점 : 빨간색으로 표시됨

