// 전역 객체 global object
// 언제 어디서든 들어마실 수 있는 공기와도 같은...
// 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체

// 브라우저 실행
// console.log(this);

// console.log(
//     this === window,
//     window === self,
//     self === frames
//   );

console.log(this);
// {}

// ⚠️ Node.js로 문서 실행시의 this는 전역 객체를 가리키지 않음
// 이후 모듈 관련 강에서 배울 것

console.log(global);

// <ref *1> Object [global] {
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
console.log(globalThis);
{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
} */
}

var myGlobalVar = 1;
const myGlobalConst = 1;

function myGlobalFunc() {}

console.log(
  globalThis.myGlobalVar,
  globalThis.myGlobalConst,
  globalThis.myGlobalFunc
);
//undefined undefined undefined
