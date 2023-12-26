// Section 8 퀴즈

const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Bob", age: 27 };

const spec1 = { job: "developer" };
const spec2 = { degree: "doctor" };
const spec3 = { cert: "photoshop" };

//  Object의 정적 메소드를 사용해서
//  person1에는 spec1의 프로퍼티를,
Object.assign(person1, spec1);

//  person2에는 spec1, spec2, spec3 모두의 프로퍼티들을 더해보세요.
Object.assign(person2, spec2, spec3);

console.log(person1, person2);
// { name: 'Alice', age: 25, job: 'developer' } { name: 'Bob', age: 27, degree: 'doctor', cert: 'photoshop' }

//  person1에 프로퍼티를 추가하거나 삭제하지 못하게 만들어보세요.
console.log(Object.getOwnPropertyDescriptors(person1));

Object.seal(person1);
console.log(Object.getOwnPropertyDescriptors(person1));

console.log(Object.isSealed(person1));
// true

//  person2를 읽기만 가능한 객체로 만들어보세요.
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

const freezePerson2 = getDeepFrozen(person2);
console.log(Object.getOwnPropertyDescriptors(freezePerson2));
//  writable: false,
// enumerable: true,
// configurable: false

const privates = ["height", "weight"];

const person3 = {
  name: "홍길동",
  sex: "M",
  height: 175,
  weight: 70,
  family: ["부", "모", "누나"],
  profession: {
    job: "developer",
    position: "사원",
    department: "프론트엔드",
  },
};

//  위의 person3 객체를 privates에 속한 프로퍼티를 제외하고
//  깊은 복사를 하는 코드를 작성해보세요.
const copied = JSON.parse(JSON.stringify(person3), (key, value) => {
  if (privates.includes(key)) return undefined;
  return value;
});

console.log(copied)
// {
//     name: '홍길동',
//     sex: 'M',
//     family: [ '부', '모', '누나' ],
//     profession: { job: 'developer', position: '사원', department: '프론트엔드' }
//   }