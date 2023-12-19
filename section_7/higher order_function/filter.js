// filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환
// ⭐️ 원본 배열을 수정하지 않음
// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter((i) => i % 2);
const evens = arr.filter((i) => !(i % 2));
const largerThan3 = arr.filter((i) => i > 3);

console.log(odds);
console.log(evens);
console.log(largerThan3);
// [ 1, 3, 5, 7, 9 ]
// [ 2, 4, 6, 8 ]
// [ 4, 5, 6, 7, 8, 9 ]
const arr2 = [
  { name: "사과", cat: "과일", price: 3000 },
  { name: "오이", cat: "채소", price: 1500 },
  { name: "당근", cat: "채소", price: 2000 },
  { name: "살구", cat: "과일", price: 2500 },
  { name: "피망", cat: "채소", price: 3500 },
  { name: "딸기", cat: "과일", price: 5000 },
];

console.log(
  "과일 목록:",
  arr2
    .filter(({ cat }) => cat === "과일")
    .map(({ name }) => name)
    .join(", ")
);
// 과일 목록: 사과, 살구, 딸기
