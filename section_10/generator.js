// 제너레이터 generator

function* genFunction() {
  console.log("하나를 반환합니다.");
  yield "하나";

  console.log("둘을 반환합니다.");
  yield "둘";

  console.log("셋을 반환합니다.");
  yield "셋";
}

const genFunc = genFunction();
// 반복 수행해 볼 것
// 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
console.log(genFunc.next());
// 하나를 반환합니다.
// { value: '하나', done: false }

// 함수 내 코드들을 모두 실행하지 않고 외부 호출자에게 제어권을 양도 - "계속할까요?"
// 이터러블과 이터레이터를 보다 간결하게 구현 가능

// 기본 사용법
// 1. 제너레이터 함수/메서드 선언
// function 다음 또는 메서드명 앞에 * - 띄어쓰기 위치 무관

// 함수 선언
function* genFunc1() {
  yield "genFunc1";
}
// 값으로 대입
const genFunc2 = function* () {
  yield "genFunc2";
};
// 객체의 메서드
const obj = {
  *genFunc3() {
    yield "genFunc3";
  },
};
// 클래스의 메서드
class MyClass {
  *genFunc4() {
    yield "genFunc4";
  }
}

// 테스트
console.log(
  genFunc1().next().value,
  genFunc2().next().value,
  obj.genFunc3().next().value,
  new MyClass().genFunc4().next().value
);
// genFunc1 genFunc2 genFunc3 genFunc4

console.log("----");
// 제너레이터 객체
// 제너레이터 함수의 결과값으로 반환
// ⭐ 이터레이터이자 이터러블
function* genFunction2() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let genObj = genFunction2();
// 로그 펼쳐서 살펴볼 것
console.log(genObj);
// Object [Generator] {}

// 💡 이터러블임 확인
console.log(genObj[Symbol.iterator]);
// [Function: [Symbol.iterator]]

console.log([...genObj]);
// [ 1, 2, 3, 4, 5 ]

// 재호출시 빈배열 반환 ⚠️ 순회 후에는 재생성 필요
console.log([...genObj]);
// []

// 이터러블로서는 바로 호출이 적합
console.log([...genFunction2()]);
// [ 1, 2, 3, 4, 5 ]

for (const num of genFunction2()) {
  console.log(num);
}

// 1
// 2
// 3
// 4
// 5

// 다시 할당 해주어야 함
genObj = genFunction2();

for (let i = 0; i < 7; i++) {
  console.log(genObj.next());
}

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

// ⭐ next 메서드를 실행하면 다음 yield까지 실행 후 중지
// yield의 값을 value로 반환
// 끝까지 실행 후 done: true

// 이터러블과 이터레이터 대체하기
// 예제 1. 🎲 주사위를 열 번 굴리는 제너레이터
function* diceTenTimes() {
  let count = 0;
  const maxCount = 10;

  while (count++ < maxCount) {
    yield Math.ceil(Math.random() * 6);
  }
}
// 이터러블
console.log([...diceTenTimes()]);
// [
//   4, 1, 2, 5, 3,
//   2, 1, 3, 6, 2
// ]

// 이터레이터 - 객체로 반환 뒤 사용
// ⚠️ 다시 순회시 재생성 필요
let diceGenObj = diceTenTimes();

for (let i = 0; i < 12; i++) {
  console.log(diceGenObj.next());
}

// { value: 5, done: false }
// { value: 5, done: false }
// { value: 6, done: false }
// { value: 1, done: false }
// { value: 5, done: false }
// { value: 5, done: false }
// { value: 4, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

// . 🧮 피보나치 제너레이터

function* fibonacci(maxCount) {
  let count = 0;
  let [x, y] = [0, 1];

  while (count++ < maxCount) {
    [x, y] = [y, x + y];
    yield y;
  }
}
console.log([...fibonacci(10)]);
// [
//   1,  2,  3,  5,  8,
//  13, 21, 34, 55, 89
// ]

let fiboGenObj = fibonacci(5);

for (let i = 0; i < 7; i++) {
  console.log(fiboGenObj.next());
}
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 5, done: false }
// { value: 8, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

// ⌛️ 순번 제너레이터

function* workersGen(people) {
  let idx = 0;

  while (idx < people.length) {
    yield people[idx++];
  }
}

const team1 = ["철수", "영희", "돌준", "미나", "준희"];
console.log([...workersGen(team1)]);
// [ '철수', '영희', '돌준', '미나', '준희' ]

// 이터레이터로 사용
// 인원 순번 넘기기
function switchWorker(iter) {
  const next = iter.next();
  console.log(next.done ? "-- 인원 없음 -- " : `${next.value} 차례입니다.`);
}

workersIter1 = workersGen(team1);

switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);

// 철수 차례입니다.
// 영희 차례입니다.
// 돌준 차례입니다.
// 미나 차례입니다.
// 준희 차례입니다.
// -- 인원 없음 --
// -- 인원 없음 --
