// 추가 불가능한 오브젝트 실드
// preventExtensions - 프로퍼티 추가 금지
// 이미 존재하는 값은 수정 및 삭제 가능

const preventObj = { x: 1, y: 2 };

// isExtensible - 해당 여부 확인
console.log(Object.isExtensible(preventObj));
// true

Object.preventExtensions(preventObj);

console.log(Object.isExtensible(preventObj));
// false

preventObj.x++; // 프로퍼티 수정 가능
delete preventObj.y; // 프로퍼티 삭제 가능
preventObj.z = 3; // 💡 프로퍼티 추가 금지

console.log(preventObj);
// { x: 2 }

// 배열에 적용시
const preventArr = [1, 2];
Object.preventExtensions(preventArr);
preventArr[0] = 2; // 기존 배열 수정은 가능

preventArr[2] = 3; // 새로운 인덱스 추가가 불가능
console.log(preventArr);
// [ 2, 2 ]

delete arr[1];
preventArr.unshift(); // 적용안됨
console.log(preventArr);
// [ 2, 2 ]

// preventArr.push(3); // ⚠️ 오류 발생
// TypeError: Cannot add property 2, object is not extensible
