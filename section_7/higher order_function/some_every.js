// some, every - 어떤/모든 요소가 기준을 충족하는지 확인
// 콜백함수에 인자로 넣은
// some - 요소들 중 하나라도 true를 반환하는가 여부 반환
// every - 모든 요소가 true를 반환하는가 여부 반환
// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.some((i) => i % 2),
  arr.every((i) => i % 2),
  arr.some((i) => i < 0),
  arr.every((i) => i < 10)
);
// true false false true

const arr2 = [
  { name: "사과", cat: "과일", price: 3000 },
  { name: "오이", cat: "채소", price: 1500 },
  { name: "당근", cat: "채소", price: 2000 },
  { name: "살구", cat: "과일", price: 2500 },
  { name: "피망", cat: "채소", price: 3500 },
  { name: "딸기", cat: "과일", price: 5000 },
];

const isCheapVege = (i) => {
  return i.cat === "채소" && i.price < 2000;
};
const isPlant = ({ cat }) => {
  return ["과일", "채소"].includes(cat);
};

console.log(
  arr2.some(isCheapVege),
  arr2.every(isCheapVege),
  arr2.some(isPlant),
  arr2.every(isPlant)
);

// true false true true
