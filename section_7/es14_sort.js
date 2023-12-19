// es14 신문법
// ## 부작용을 제거한 메서드들

// - 원본 배열의 내용을 수정하지 않음
// - 함수형 패러다임의 기조를 따름

// toSorted : 정렬된 결과를 반환

const array0 = [3, 1, 4, 5, 2];
array0.sort(); // 메서드 호출이 부수효과 발생 원본배열에 영향을 줌

console.log(array0);
// [ 1, 2, 3, 4, 5 ]

const array1 = [3, 1, 4, 5, 2];
const array2 = [...array1];

console.log(array1, array2);
// [ 3, 1, 4, 5, 2 ] [ 3, 1, 4, 5, 2 ]

const array1Sorted = array1.sort(); // 새 배열 반환해주지 않고 주소값을 전달해줌 깊은복사
const array2Sorted = array2.toSorted();

console.log(array1Sorted, array2Sorted);
// [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]

array1Sorted.push(6);
array2Sorted.push(6);

console.log(array1Sorted, array2Sorted);
// [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]

console.log(array1, array2);
// [ 1, 2, 3, 4, 5, 6 ] [ 3, 1, 4, 5, 2 ]
// array2는 toSorted 를 사용하였기 때문에 원본배열이 변경되지 않음


// es14 전에는...
array3 = [3, 1, 4, 5, 2];
array3Sorted = [...array3].sort(); // 이제는 이렇게 할 필요 없음

console.log(array3, array3Sorted);
// [ 3, 1, 4, 5, 2 ] [ 1, 2, 3, 4, 5 ]

array4 = [3, 6, 1, 10, 4, 8, 7, 5, 9, 2];

// 역시 고차함수 - 콜백함수를 받음
array4Sorted = array4.toSorted((a, b) => a % 2 - b % 2);

console.log(array4, array4Sorted);
// [
//     3, 6, 1, 10, 4,
//     8, 7, 5,  9, 2
//   ] [
//     6, 10, 4, 8, 2,
//     3,  1, 7, 5, 9
//   ]