// 스프레드 spread

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2);
// [ 1, 2, 3 ]

const array1 = ["B", "C"];
const array2 = ["D"];
const array3 = ["E"];

const array4 = ["A", ...array1, ...array2, ...array3, "F"];

console.log(array4);
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// 활용
// a. 배열을 다수의 인자들로 펼침
const arr = [1, 2, 3, 4, 5];

console.log(arr);
// [ 1, 2, 3, 4, 5 ]

// 스프레이드 문법으론 console.log(1, 2, 3, 4, 5); 와 같이 표현됨
console.log(...arr);
// 1 2 3 4 5
console.log(Math.max(...arr), Math.min(...arr));
// 5 1

function classIntro(classNo, teacher, ...children) {
  return (
    `${classNo}반의 선생님은 ${teacher}, ` +
    `학생들은 ${children.join(", ")}입니다.`
  );
}

const classNo = 3;
const teacher = "김민지";
const students = ["영희", "철수", "보라", "돌준", "달숙"];

console.log(classIntro(classNo, teacher, ...students));
// 3반의 선생님은 김민지, 학생들은 영희, 철수, 보라, 돌준, 달숙입니다.

const ar = [1, 2, 3, 4, 5, 6, 7];
const toAdd = ["둘", "셋", "넷"];

ar.splice(1, 3, ...toAdd);

console.log(ar);
// [
//     1,    '둘', '셋',
//     '넷', 5,    6,
//     7
//   ]

// concat보다 가독성있는 배열 결합
const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];

const arr3 = ar1.concat(ar2);
const arr4 = [...ar1, ...ar2];

console.log(arr3, arr4);
// [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]

// 배열의 얕은 복사

const ar3 = [1, 2, 3];
const ar4 = [...arr1];

console.log(ar3 === ar4);
// false

ar3[0] = 0;

console.log(ar3, ar4);
//[ 0, 2, 3 ] [ 1, 2, 3 ]

// ⚠️ 깊은 복사는 되지 않음
const ar5 = [{ x: 1 }, { x: 2 }];
const ar6 = [...ar5];

ar5[0].x = 0;
console.log(ar5, ar6);

// [ { x: 0 }, { x: 2 } ] [ { x: 0 }, { x: 2 } ]
console.log(ar5 === ar6);
//false

// push, unshift 대신 사용
// 가독성 향상
// 배열이 든 변수의 참조값이 변할 필요가 있는 경우 (SPA 등...)

let ar7 = [1, 2, 3];

ar7 = [...ar7, 4];
console.log(ar7);
// [ 1, 2, 3, 4 ]

ar7 = [0, ...ar7];
console.log(ar7);
// [ 0, 1, 2, 3, 4 ]



// 원본배열을 유지한 채 일정부분만 연결하여 복사
// splice는 원본배열을 변경
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 4 ~ 6을 제외한 새 배열 만들기

// 💡 splice는 원본배열을 변경하나 slice는 원본을 변경하지 않음
const array = [...orgArr.slice(0, 3), ...orgArr.slice(6, 9)];
console.log(array);
// [ 1, 2, 3, 7, 8, 9 ]

// 참고: 또 다른 방법
const array5 = orgArr.filter((_, i) => !(i >= 3 && i < 6));
console.log(array5);
// [ 1, 2, 3, 7, 8, 9 ]

// 원본은 유지
console.log(orgArr);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]
