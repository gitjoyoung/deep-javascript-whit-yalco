// 일급객체
// 함수와 변수를 같이 다루는 언어에 있는 개념
// 함수는 일급객체이다.

//일급 객체의 특성
// 상수 또는 변수에 할당될 수 있음
// 다른 함수에 인자로 전달될 수 있음
// 다른 함수의 결과값으로서 반환될 수 있음

function isOddNum(number) {
  console.log((number % 2 ? "홀" : "짝") + "수입니다.");
  return number % 2 ? true : false;
}

const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의.

console.log(checkIfOdd(23));
//  실행결과
//  홀수입니다.
// true

// 함수를 변수에 할당할 수 있음
let x = 7,
  y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));

func1 = func2;
console.log(func1(x, y), func2(x, y));

// 실행결과
// 10 4
// 4 4


// 함수를 다른 함수의 인자로 전달할 수 있음
// 전달받는 함수 : 고차 함수 highter-order function
// 전달되는 함수 : 콜백 함수 callback function
let list = [1, 2, 3, 4, 5];

// doInArray 함수는 배열과 함수를 인자로 받음
// doInArray 함수는 고차 함수
function doInArray (array, func) {
    for (item of array) {
        // 여기서 fuvc는 콜백함수
    func(item);
  }
}

// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log);
// 실행결과
// 1
// 2
// 3
// 4
// 주요개념
// doInArray : 고차함수 higher-order function
// console.log : 콜백함수 callback function


// calculate
// ()=> {} 는 익명함수  anonymous function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7),
  calcAndEval(subtract, isPositive, 5, 7),
  calcAndEval(multiply, isOdd, 5, 7)
);
// 실행결과
// false false true