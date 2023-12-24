// `with` 부분적으로 수정한 배열을 반환
// - 첫 번째 인자로 주어진 인덱스의 값을 두 번째 인자로 주어진 값으로 수정한 새 배열 반환

const orgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 아래의 코드는 원본 배열을 수정
// orgArray[3] = '넷';

// 원본 수정 없이 4번째 요소를 ‘넷’으로 바꾼 배열을 얻고 싶다면?
const newArray = [...orgArray.slice(0, 3), "넷", ...orgArray.slice(4, 10)];

console.log(newArray, orgArray);
// [1, 2, 3, "넷", 5, 6, 7, 8, 9, 10][(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)];

const withArray = orgArray.with(3, "넷");

console.log(withArray);
// [1, 2, 3, "넷", 5, 6, 7, 8, 9, 10]


const withArray2 = orgArray.with(3, "넷").with(6, "일곱").with(9, "열");

console.log(withArray2);
// [1, 2, 3, "넷", 5, 6, "일곱", 8, 9, "열"]
