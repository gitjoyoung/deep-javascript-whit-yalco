// find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// 콜백함수로에 인자로 넣었을 때 true를 반환하는
// find - 첫 번째 값 반환
// findLast - 마지막 값 반환
// findIndex - 첫 번째 값의 인덱스 반환
// findLastIndex - 마지막 값의 반환
// 공통 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, "삼", 4, 5, 6, "칠", 8, 9];

const isString = (i) => typeof i === "string";
const isBoolean = (i) => typeof i === "boolean";

console.log(
  arr.find(isString),
  arr.findLast(isString),
  arr.findIndex(isString),
  arr.findLastIndex(isString)
);
// 삼 칠 2 6

// 없을 시 값은 undefined, 인덱스는 -1 반환
console.log(
  arr.find(isBoolean),
  arr.findLast(isBoolean),
  arr.findIndex(isBoolean),
  arr.findLastIndex(isBoolean)
);
// undefined undefined -1 -1


const arr2 = [
    { name: '사과', cat: '과일', price: 3000 },
    { name: '오이', cat: '채소', price: 1500 },
    { name: '당근', cat: '채소', price: 2000 },
    { name: '살구', cat: '과일', price: 2500 },
    { name: '피망', cat: '채소', price: 3500 },
    { name: '딸기', cat: '과일', price: 5000 }
  ];
  
  const isCheapFruit = i => {
    return i.cat === '과일' && i.price < 3000;
  }
  
  console.log(
    arr2.find(({cat}) => cat === '채소').name,
    arr2.findLast(isCheapFruit).name
  );
//   오이 살구