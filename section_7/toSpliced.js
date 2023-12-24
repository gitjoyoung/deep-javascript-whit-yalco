// toSpliced : 잘린 결과를 반환

const array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const array8 = [...array7];

const arraySplice = array7.splice(4, 3, "A", "B", "C"); // 원본 배열이 수정되는 부작용 유발

// 원본 배열 변경
console.log(array7);
// [0, 1, 2, 3, "A", "B", "C", 7, 8];

// array8 을 인덱스 4 부터 3번째 까지 새로운 배열 반환
const array9 = array8.toSpliced(4, 3);

// array8 을 인덱스 4 부터 3번째 까지  "A", "B", "C" 추가하여 새로운 배열 반환
const array10 = array8.toSpliced(4, 3, "A", "B", "C");

console.log(array9, array10);

// [0, 1, 2, 3, 7, 8][(0, 1, 2, 3, "A", "B", "C", 7, 8)];

// 원본배열은 바뀌지 않음
console.log(array8);
// [0, 1, 2, 3, 4, 5, 6, 7, 8];
