// 매개변수 parameter
// 매개변수 parameter 는 함수를 선언할 때 함수에 전달하는 변수

function add1(a, b) {
  return a + b;
}

console.log(add1(1, 3), add1(1, 3, 5), add1(1, 3, 5, 7));

//   실행결과
// 4 4 4
// 주요내용
// 지바스크립트에서 인수는 매개변수의 개수와 상관없이
// 들어갈수 있다
// 들어간 인수는 객체 arguments에 저장된다
// 매개변수의 개수보다 인수의 개수가 더 많을 때
// 매개변수에는 인수가 대입되고 나머지 인수는 무시됨

// 기본값 매개변수
// 디폴트값을 미리 넣어줄수 있다
console.log("------------------");
function add2(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(add2(), add2(1), add2(1, 3));
// 실행결과
// 2 + 4
// 1 + 4
// 1 + 3
// 6 5 4

// arguments 함수내에서 사용가능한 지역변수
// 인수 argument 는 함수를 호출할 때 함수에 전달하는 값
// 배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작 (배열도 사실 객체지만...)
// 함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐
console.log("------------------");

function add3(a, b) {
  console.log("1.", arguments);
  console.log("2.", arguments[0]);
  console.log("3.", typeof arguments);
  return a + b;
}
// 전달된 인수는 모두 저장된다
console.log("4.", add3(1, 3, 5, 7));
// 실행결과
// 1. [Arguments] { '0': 1, '1': 3, '2': 5, '3': 7 }
// 2. 1
// 3. object
// 4. 4
console.log("------------------");

function add4(a, b) {
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}

console.log(add4(1, 3, 5, 7));
// 실행결과
// 1
// 3
// 5
// 7
// 마지막 콘솔 합산
// 4

console.log("getAverage------------------");

function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(getAverage(1, 4, 7), getAverage(24, 31, 52, 80));
// 실행결과
// 4 46.75
console.log(getAverage(1, "가"));

// 💡 타입에 안전한 버전
// getAverage 위 함수는 문제가 있음
// getAverage(1,'가')과 같이 타입이 아닌 문자열이 들어가면 NaN
// 타입검사를 통해 타입이 넘버가 아니라면 계산하는방법
console.log("getAverage2------------------");

function getAverage2() {
  let result = 0,
    count = 0;
  for (const num of arguments) {
    if (typeof num !== "number") continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(getAverage2(2, "가", 8, true, 5));
// 실행결과
// 5

console.log("combineArms------------------");
// 함수를 파라메터로 넣어주는 것도 가능
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function combineArms() {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== "function") continue;
      result = arm(result, y);
    }
    return result;
  };
}

const add_mul = combineArms(add, mul, 1, true);
const add_mul_sub = combineArms(add, mul, sub);
const add_mul_sub_div = combineArms(add, mul, sub, div);

// 💡 익명 함수 사용됨
const add_mul_sub_div_pow = combineArms(add, mul, sub, div, (x, y) => x ** y);

console.log(
  add_mul(8, 3),
  add_mul_sub(8, 3),
  add_mul_sub_div(8, 3),
  add_mul_sub_div_pow(8, 3)
);

// 실행결과
// 33 30 10 1000


// 나머지 변수
// ...변수그룹명 - 나머지 변수 rest parameters
console.log("classIntro------------------");

console.log(
  '3.',
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅
// 함수 선언이 스코프 최상단으로 끌어 올려 졌다
function classIntro (classNo, teacher, ...children) {
  console.log('1.', children);
  console.log('2.', arguments);

  let childrenStr = '';
  for (const child of children) {
    if (childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${childrenStr}입니다.`
}

// 실행결과
// 1. [ '영희', '철수', '보라' ]
// 2. [Arguments] { '0': 3, '1': '김민지', '2': '영희', '3': '철수', '4': '보라' }
// 3. 3반의 선생님은 김민지, 학생들은 영희, 철수, 보라입니다.


console.log("doMultiArms------------------");

function doMultiArms (x, y, ...arms) {
  let result = x;
  for (const arm of arms) {
    // 함수가 아니면 넘어가기
    if (typeof arm !== 'function') continue;
    // 함수 실행결과를 result에 담아주기
    result = arm(result, y);
  }
  return result;
}
// add , mul sub ,div 는 위에 선언이 되있다.
console.log(
  doMultiArms(8, 3, add, mul, 1, true),
  doMultiArms(8, 3, add, mul, sub),
  doMultiArms(8, 3, add, mul, sub, div),
  doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y)
);
// 실행결과
// 33 30 10 1000
