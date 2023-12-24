// 추가 삭제 불가능한 오브젝트 실드
// seal - 프로퍼티 추가와 삭제 금지
// 수정만 가능
// isSealed - 해당 여부 확인

const obj = { x: 1, y: 2 };

console.log(Object.isSealed(obj));
// false

Object.seal(obj);
console.log(Object.isSealed(obj));

// true
obj.x++; // 프로퍼티 수정 가능
delete obj.y; // 💡 프로퍼티 삭제 금지
obj.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj);
// { x: 2, y: 2 }
