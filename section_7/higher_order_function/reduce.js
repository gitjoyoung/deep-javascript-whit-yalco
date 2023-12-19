// reduce, reduceRight
// 주어진 콜백함수에 따라 값들을 접어 나감
// 인자들:
// 콜백함수 - 인자: ( 이전값, 현재값, 현재 인덱스, 해당 배열 )

//초기화 값이 없을 때는 첫 번째와 두 번째 값부터
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);
// p: 1, c: 2, i: 1
// p: 3, c: 3, i: 2
// p: 6, c: 4, i: 3
// p: 10, c: 5, i: 4
// p: 15, c: 6, i: 5
// p: 21, c: 7, i: 6
// p: 28, c: 8, i: 7
// p: 36, c: 9, i: 8
// 45

// 초기화 값이 있을 때 인덱스가 0부터 시작함
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
    // 10에서 부터 시작 초기화값
  }, 10)
);
// p: 10, c: 1, i: 0
// p: 11, c: 2, i: 1
// p: 13, c: 3, i: 2
// p: 16, c: 4, i: 3
// p: 20, c: 5, i: 4
// p: 25, c: 6, i: 5
// p: 31, c: 7, i: 6
// p: 38, c: 8, i: 7
// p: 46, c: 9, i: 8
// 55

// 곱해나가기
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev * curr;
  })
);

// p: 1, c: 2, i: 1
// p: 2, c: 3, i: 2
// p: 6, c: 4, i: 3
// p: 24, c: 5, i: 4
// p: 120, c: 6, i: 5
// p: 720, c: 7, i: 6
// p: 5040, c: 8, i: 7
// p: 40320, c: 9, i: 8
// 362880

// 더하기와 빼기 반복
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return idx % 2 ? prev + curr : prev - curr;
  })
);

// p: 1, c: 2, i: 1
// p: 3, c: 3, i: 2
// p: 0, c: 4, i: 3
// p: 4, c: 5, i: 4
// p: -1, c: 6, i: 5
// p: 5, c: 7, i: 6
// p: -2, c: 8, i: 7
// p: 6, c: 9, i: 8
// -3

// 홀수와 짝수 갯수
console.log(
  arr.reduce(
    (prev, curr) => {
      return {
        odd: prev.odd + (curr % 2),
        even: prev.even + (1 - (curr % 2)),
      };
    },
    { odd: 0, even: 0 }
  )
);
// { odd: 5, even: 4 }

const arr2 = ["가", "나", "다", "라", "마", "바", "사"];

console.log(
  arr2.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);

// p: 가, c: 나, i: 1
// p: 가나, c: 다, i: 2
// p: 가나다, c: 라, i: 3
// p: 가나다라, c: 마, i: 4
// p: 가나다라마, c: 바, i: 5
// p: 가나다라마바, c: 사, i: 6
// 가나다라마바사

console.log(
  arr2.reduceRight((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);

//   p: 사, c: 바, i: 5
// p: 사바, c: 마, i: 4
// p: 사바마, c: 라, i: 3
// p: 사바마라, c: 다, i: 2
// p: 사바마라다, c: 나, i: 1
// p: 사바마라다나, c: 가, i: 0
// 사바마라다나가

const arr3 = [
  { name: "사과", cat: "과일", price: 3000 },
  { name: "오이", cat: "채소", price: 1500 },
  { name: "당근", cat: "채소", price: 2000 },
  { name: "살구", cat: "과일", price: 2500 },
  { name: "피망", cat: "채소", price: 3500 },
  { name: "딸기", cat: "과일", price: 5000 },
];

["과일", "채소"].forEach((category) => {
  console.log(
    `${category}의 가격의 합:`,
    arr3
      .filter(({ cat }) => cat === category)
      .map(({ price }) => price)
      .reduce((prev, curr) => prev + curr)
  );
});

//   과일의 가격의 합: 10500
// 채소의 가격의 합: 7000

// 만약 위 기능을 배열 메서드와 체이닝 없이 짰다면?
// 중간 과정을 저장하기 위한 변수 또는 내용이 바뀌는 참조형 데이터들이 사용되었을 것
// 함수형 프로그래밍 - 변수들을 코드에서 감추어 부수효과로 인한 문제 방지
