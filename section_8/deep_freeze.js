// 깊은 동결 deep freeze
// 재귀적으로 객체를 가장 깊숙히까지 동결
// 🔗 MDN 문서의 deepFreeze 예시와는 달리, 주어진 인자 자체를 변형하지 않도록

function getDeepFrozen(obj) {
  console.log(obj);

  const result = {};
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];

    result[name] =
      value && typeof value === "object" ? getDeepFrozen(value) : value;
  }
  return Object.freeze(result);
}

let myObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};

// 여러 번 실행해 볼 것
myObj.a++;
myObj.b.c++;
myObj.b.d.e++;
myObj.b.d.f.g++;

console.log(myObj);
// { a: 2, b: { c: 3, d: { e: 4, f: [Object] } } }

// 💡 실행 뒤 바로 위의 출력 코드를 다시 실행해 볼 것

myObj = getDeepFrozen(myObj);
// { a: 2, b: { c: 3, d: { e: 4, f: [Object] } } }
// { c: 3, d: { e: 4, f: { g: 5 } } }
// { e: 4, f: { g: 5 } }
// { g: 5 }

myObj.a++;
myObj.b.c++;
myObj.b.d.e++;
myObj.b.d.f.g++;

console.log(myObj);
// { a: 2, b: { c: 3, d: { e: 4, f: [Object] } } }
