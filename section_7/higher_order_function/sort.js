// sort - 배열을 ( 주어진 기준대로 ) 정렬
// ⚠️ 배열 자체의 순서를 바꿈 - 원본 수정
// ➕ 해당 배열을 반환
// 인자들:
// 콜백함수(필수 아님) - 인자: ( 앞의 값, 뒤의 값 )

// 1. 인자가 없을 시
const arr = ["라", "사", "다", "가", "바", "마", "나"];

arr.sort();

console.log(arr);
// [
//     '가', '나',
//     '다', '라',
//     '마', '바',
//     '사'
//   ]

let randomWord = "DBKGICAHFEJ";

console.log(
  randomWord
    .split("")
    .sort()
    // .reverse()
    .join("")
);
// ABCDEFGHIJK

console.log(randomWord);
// DBKGICAHFEJ

// ⚠️ 숫자일 시 문제가 생김
const arr2 = [1, 2, 30, 400, 10, 100, 1000];
console.log(arr2.sort());
// [1, 10, 100, 1000, 2, 30, 400];
// 숫자를 문자열로 암묵적 변환하여 오름차순 정렬

// 숫자 비교는 이렇게
arr2.sort((a, b) => a - b);

console.log(arr2);
// [1, 2, 10, 30, 100, 400, 1000];

// 정확한 정렬을 위해 - 콜백 함수 사용
// 두 인자 a와 b : 인접한 두 요소
// 0보다 큰 값 반환 : b를 앞으로 - 순서 뒤집음
// 0 반환: 순서 유지 - ECMAScript 표준은 아니므로 환경마다 다를 수 있음
// 0보다 작은 값 반환 : a를 앞으로 - 사실상 순서 유지

// ** 브라우저마다 동작 디테일 다름
// 인접한 앞의 것과 뒤의 것을, 콜백함수의 첫 번째와 두 번째 인자 (a, b) 중

// 브라우저마다 로그 내역이 다름 주목 크롬계열 vs 파이어폭스 등...
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 변함없음
console.log(
  arr3.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return 1;
  })
);

// 순서 거꾸로
console.log(
  arr.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return -1;
  })
);

// 셔플 - ⚠️ 위의 코드들과 로그 갯수 비교
console.log(
  arr.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return Math.random() - 0.5;
  })
);

// 아래의 실습결과는 환경이 달라도 같음
// a와 b의 의미에 따라 반환값 양수/음수의 음수의 의미도 바뀌기 때문
// 따라서 실무에서는 실행환경을 신경쓸 필요 없음

const arr4 = [1, 2, 30, 400, 10, 100, 1000];

console.log(arr4.sort((a, b) => a - b));
console.log(arr4.sort((a, b) => b - a));
// [1000, 400, 100, 30, 10, 2, 1];

// NaN을 반환하므로 콜백에 사용 불가
console.log("A" - "B"); // NaN

const arr5 = ["F", "E", "I", "A", "H", "C", "D", "J", "G", "B"];

console.log(arr5.sort((a, b) => (a > b ? 1 : -1)));

// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

console.log(arr5.sort((a, b) => (a < b ? 1 : -1)));
// ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];

const arr6 = [
  { name: "사과", cat: "과일", price: 3000 },
  { name: "오이", cat: "채소", price: 1500 },
  { name: "당근", cat: "채소", price: 2000 },
  { name: "살구", cat: "과일", price: 2500 },
  { name: "피망", cat: "채소", price: 3500 },
  { name: "딸기", cat: "과일", price: 5000 },
];

console.log(
  arr6
    .sort((a, b) => {
      if (a.cat !== b.cat) {
        return a.cat > b.cat ? 1 : -1;
      }
      return a.price > b.price ? 1 : -1;
    })
    .map(({ name, cat, price }, idx) => {
      return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`;
    })
    .join("\n - - - - - - - - - \n")
);

// 1: [과] 살구: 2500원
//  - - - - - - - - -
// 2: [과] 사과: 3000원
//  - - - - - - - - -
// 3: [과] 딸기: 5000원
//  - - - - - - - - -
// 4: [채] 오이: 1500원
//  - - - - - - - - -
// 5: [채] 당근: 2000원
//  - - - - - - - - -
// 6: [채] 피망: 3500원
