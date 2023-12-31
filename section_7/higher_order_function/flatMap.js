// flatMap - map 한 다음 flat 매핑해서 펼침
// 인자들:
// 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// thisArg

const arr = [1, 2, 3, 4, 5];

console.log(arr.flatMap((i) => i));
// [1, 2, 3, 4, 5];

console.log(arr.flatMap((i) => [i, i, i]));
// [
//     1, 1, 1, 2, 2, 2,
//     3, 3, 3, 4, 4, 4,
//     5, 5, 5
//   ]

console.log(arr.flatMap((i) => [i * 10, i * 100, i * 1000]));
// [
//     10,  100, 1000,   20,
//    200, 2000,   30,  300,
//   3000,   40,  400, 4000,
//     50,  500, 5000
// ]

// 💡 한 단계만 펼침
console.log(arr.flatMap((i) => [i, [i], [[i]]]));
// [
//     1, [ 1 ], [ [ 1 ] ],
//     2, [ 2 ], [ [ 2 ] ],
//     3, [ 3 ], [ [ 3 ] ],
//     4, [ 4 ], [ [ 4 ] ],
//     5, [ 5 ], [ [ 5 ] ]
//   ]

const word = "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열";

console.log(word.split(" ").flatMap((i) => i.split("")));
// [
//     '하', '나', '둘', '셋',
//     '넷', '다', '섯', '여',
//     '섯', '일', '곱', '여',
//     '덟', '아', '홉', '열'
//   ]
