// map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환

// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const orgArr = [1, 2, 3, 4, 5];

// ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
const arr1 = orgArr.map((i) => i + 1);
console.log(arr1);
// [ 2, 3, 4, 5, 6 ]

const arr2 = orgArr.map((i) => i * i);
console.log(arr2);
// [ 1, 4, 9, 16, 25 ]

const arr3 = orgArr.map((i) => (i % 2 ? "홀수" : "짝수"));
console.log(arr3);
// [ '홀수', '짝수', '홀수', '짝수', '홀수' ]

const orgArr2 = [
  { name: "사과", cat: "과일", price: 3000 },
  { name: "오이", cat: "채소", price: 1500 },
  { name: "당근", cat: "채소", price: 2000 },
  { name: "살구", cat: "과일", price: 2500 },
  { name: "피망", cat: "채소", price: 2500 },
  { name: "딸기", cat: "과일", price: 5000 },
];

const arr4 = orgArr2.map((itm) => {
  // 💡 블록 안에서는 return 문 필요함
  return {
    name: itm.name,
    cat: itm.cat,
  };
});

console.log(arr4);
// [
//     { name: '사과', cat: '과일' },
//     { name: '오이', cat: '채소' },
//     { name: '당근', cat: '채소' },
//     { name: '살구', cat: '과일' },
//     { name: '피망', cat: '채소' },
//     { name: '딸기', cat: '과일' }
//   ]

// 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr5 = orgArr2.map(({ name, cat }) => {
  return { name, cat };
});

console.log(arr5);

//   [
//     { name: '사과', cat: '과일' },
//     { name: '오이', cat: '채소' },
//     { name: '당근', cat: '채소' },
//     { name: '살구', cat: '과일' },
//     { name: '피망', cat: '채소' },
//     { name: '딸기', cat: '과일' }
//   ]

const joined = orgArr2
  .map(({ name, cat, price }, idx) => {
    return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`;
  })
  .join("\n - - - - - - - - - \n");

console.log(joined);

// 1: [과] 사과: 3000원
//  - - - - - - - - - 
// 2: [채] 오이: 1500원
//  - - - - - - - - - 
// 3: [채] 당근: 2000원
//  - - - - - - - - - 
// 4: [과] 살구: 2500원
//  - - - - - - - - - 
// 5: [채] 피망: 2500원
//  - - - - - - - - - 
// 6: [과] 딸기: 5000원
