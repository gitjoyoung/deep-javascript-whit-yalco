// I. 이터러블 프로토콜 iterable protocol
// 규격 aaa 배터리와 같은 표준
// 반복, 순회 기능을 사용하는 주체간의 통일된 규격
// 공통 기능들: for ... of, 스프레드 문법, 배열 디스트럭쳐링

// 이터러블 iterable - 이터러블 프로토콜을 준수하는 객체
// 배열, 문자열, Set, Map, arguments 등...
// 키 Symbol.iterator ( well-known 심볼 ) 의 값으로 이터레이터를 반환하는 메서드를 가짐

console.log(
  [][Symbol.iterator],
  ""[Symbol.iterator],
  new Set()[Symbol.iterator],
  new Map()[Symbol.iterator]
);
// [Function: values] [Function: [Symbol.iterator]] [Function: values] [Function: entries]

// 다른 타입의 인스턴스에는 없음
console.log(
  (1)[Symbol.iterator],
  true[Symbol.iterator],
  { x: 1 }[Symbol.iterator]
);
// undefined undefined undefined

// 실행시 이터레이터 반환

console.log(
  [][Symbol.iterator](),
  ""[Symbol.iterator](),
  new Set()[Symbol.iterator](),
  new Map()[Symbol.iterator]()
);
// Object [Array Iterator] {} Object [String Iterator] {} [Set Iterator] {  } [Map Entries] {  }

// 이터레이터 iterator
// next 메서드를 통해 이터러블을 순회하며 값을 반환
const arr = [1, "A", true, null, { x: 1, y: 2 }];
const arrIterator = arr[Symbol.iterator]();

// 펼쳐서 메서드 살펴볼 것
console.log(arrIterator);
// Object [Array Iterator] {}

console.log(arrIterator.next);
// [Function: next]

arrIterator.next(); // ⭐ 반복 실행해 볼 것

// 이터레이터 프로토콜 iterator protocol
// next 메서드의 반환 객체 내 요소

// value - 해당 차례에 반환할 값
// done - 순회 종료 여부 ( 마지막 값 반환 다음 차례부터 )

// 이터러블 만들어보기
// 예제 1. 🎲 주사위를 열 번 굴리는 이터러블
const diceTenTimes = {
  // ⭐️ 아래의 메서드를 갖는 것이 이터러블 프로토콜
  [Symbol.iterator]() {
    let count = 0;
    let maxCount = 10;

    // ⭐️ 이터레이터(next 메서드를 가진 객체)을 반환
    return {
      next() {
        return {
          value: Math.ceil(Math.random() * 6),
          done: count++ >= maxCount,
        };
      },
    };
  },
};

const diceIterator = diceTenTimes[Symbol.iterator]();

for (let i = 0; i < 12; i++) {
  console.log(diceIterator.next());
}
// { value: 3, done: false }
// { value: 5, done: false }
// { value: 6, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// { value: 1, done: false }
// { value: 4, done: false }
// { value: 1, done: false }
// { value: 6, done: false }
// { value: 6, done: false }
// { value: 2, done: true }
// { value: 1, done: true }

// 💡 for ... of 문 사용 가능
for (const num of diceTenTimes) {
  console.log(num);
}
// 6
// 5
// 2
// 1
// 6
// 2
// 4
// 3
// 2
// 3

// 💡 스프레드 문법 사용 가능
const diceResults = [...diceTenTimes];

console.log(diceResults);
// [
//   3, 5, 6, 4, 4,
//   1, 4, 2, 4, 3
// ]

// 💡 배열 디스트럭쳐링 사용 가능
const [first, second, ...rest] = diceTenTimes;

console.log(
  "주사위의 첫번째, 두번째 숫자는 각각 " +
    `${first}(와)과 ${second}, 나머지의 합은 ${rest.reduce(
      (a, b) => a + b
    )} 입니다.`
);
// 주사위의 첫번째, 두번째 숫자는 각각 6(와)과 5, 나머지의 합은 33 입니다.

// 피보나치 이터러블

function fiboIterator() {
  let count = 0;
  const maxCount = 10; // 최대 횟수가 지정됨
  let [x, y] = [0, 1];

  return {
    next() {
      [x, y] = [y, x + y];
      return { value: y, done: count++ >= maxCount };
    },
  };
}

// 피보나치 객체를 생성하고  [Symbol.iterator] 특수한 심볼에 이터레이터를 넣어주면  
// 이터러블 객체

const fibonacci = {
  [Symbol.iterator]: fiboIterator,
};

for (num of fibonacci) {
  console.log(num);
}
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89

// 원하는 최대 횟수의 피보나치 이터러블 생성하기

function getFiboWithMax(maxCount) {
  return {
    [Symbol.iterator]() {
      let count = 0;
      let [x, y] = [0, 1];

      return {
        next() {
          [x, y] = [y, x + y];
          return { value: y, done: count++ >= maxCount };
        },
      };
    },
  };
}

const fiboMax5 = getFiboWithMax(5);
const fiboMax20 = getFiboWithMax(20);

console.log([...fiboMax5]);
console.log([...fiboMax20]);
// [ 1, 2, 3, 5, 8 ]
// [
//   1,    2,    3,    5,     8,
//  13,   21,   34,   55,    89,
// 144,  233,  377,  610,   987,
// 1597, 2584, 4181, 6765, 10946
// ]


// 순번 이터러블 X 이터레이터
// 💡 이터러블의 역할도 하는 이터레이터 만들기

function workersIter (people) {
  let idx = 0;

  return {
    // 💡 이터레이터로서 [스스로]를 반환!
    // 사장: 직원은 나다.
    [Symbol.iterator] () { return this; },

    // 직원의 역할
    next () {
      return {
        value: people[Math.min(idx, people.length - 1)],
        done: idx++ >= people.length
      };
    }
  }
}

// 이터러블로 사용
// 인원 명단 확인
const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];
let workersIter1 = workersIter(team1);

console.log(
  [...workersIter1]
);
// [ '철수', '영희', '돌준', '미나', '준희' ]

// 새로 생성해야 다시 순회
workersIter1 = workersIter(team1);

console.log(
  [...workersIter1]
);
// [ '철수', '영희', '돌준', '미나', '준희' ]


// 이터레이터로 사용
// 인원 순번 넘기기
function switchWorker(iter) {
  const next = iter.next();
  console.log(
    next.done
    ? '-- 인원 없음 -- '
    : `${next.value} 차례입니다.`
  );
}

workersIter1 = workersIter(team1);

switchWorker(workersIter1); // ⭐ 반복 실행해 볼 것

// 철수 차례입니다.
switchWorker(workersIter1); // ⭐ 반복 실행해 볼 것
// 영희 차례입니다       