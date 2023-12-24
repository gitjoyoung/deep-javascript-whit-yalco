// 가장 강력한 오브젝트 실드
// freeze - 객체 동결 - 읽기만 가능
// 그러나 deth 가 깊어지면 프리징이 안됨

// 객체에 사용
const obj = { x: 1, y: 2 };

// isFrozen - 해당 여부 확인
console.log(Object.isFrozen(obj));
// false

Object.freeze(obj);

console.log(Object.isFrozen(obj));
// true

obj.x++; // 💡 프로퍼티 수정 불가
delete obj.y; // 💡 프로퍼티 삭제 금지
obj.z = 3; // 💡 프로퍼티 추가 금지

console.log(obj);
// { x: 1, y: 2 }

// 배열에 사용
const arr = [1];

Object.freeze(arr);

arr[0]++; // 💡 요소 수정, 추가, 삭제 불가

console.log(arr);
// [ 1 ]


// deth 가 깊어지면 프리징이 안됨
const obj2 = {
  x: 1,
  y: { a: 1 },
};

Object.freeze(obj2);

obj2.x++;
obj2.y.a++;

console.log(obj2);
// { x: 1, y: { a: 2 } }
