// 객체와 배열
// 객체는 이름이 있는 값들을 저장하는 자료구조
// 원시타입이 아닌 나머지 값들은 모두 객체라고 생각하면 된다.
// 객체란 복합적인 정보를 property 키와 값의 조합으로 표현할 수 있는 자료형이다.
// 주요내용
// 상수로 선언된 객체라도 프로퍼티를 추가하거나 삭제할 수 있다.

const person1 = {
  name: "김철수",
  age: 25,
  married: false,
};

console.log(typeof person1);
console.log(person1);

// 실행결과
// object
// { name: '김철수', age: 25, married: false }

console.log(person1.name, person1.age, person1.married);
// 실행결과
//김철수 25 false

// 주요내용
// 객체에서 값을 가져올 때는 점(.)을 사용하여 가져오는 방법과
// 속성명을 string으로 가져오는 방법이 있다.

console.log(
  person1["name"], // 속성명을 string으로
  person1["age"],
  person1["married"]
);
// 실행결과 는 같음
//김철수 25 false

// 만약 없는 값을 불러온다면
console.log(
    person1.birth,
    person1["birth"]
  );
// 실행결과
// undefined undefined
// 에러가 발생하지 않지만 undefined가 출력된다.

// 객체에 속성이 존재하는지 확인하는 방법
console.log(
    'age' in person1,
    'birth' in person1
  );
  // 실행결과
  // true false

 // 특정 프로퍼티의 값 변경
person1.age = 26;
person1['married'] = true

console.log(person1);

// 실행결과
// { name: '김철수', age: 26, married: true }

// 새 프로퍼티 추가
person1.job = 'developer';
person1['bloodtype'] = 'AB'

console.log(person1);
// 실행결과
// { name: '김철수', age: 26, married: true, job: 'developer', bloodtype: 'AB' }


//  참조형 property 값 변경
const obj1 = {
    num: 1, str: 'ABC', bool: true
  };
  const obj2 = obj1;
  // obj2 = {}; // 는 분별성 const 키워드를 사용하기 때문에 에러가 발생한다.

// obj1과 obj2는 같은 객체를 참조하고 있음
// 내부 변경 방지는 이후 배울 Object.freeze 함수로
obj2.num = 2;
obj2.str = '가나다';
obj2.bool = false;

console.log('obj1:', obj1);
console.log('obj2:', obj2);
// 실행결과
// obj1: { num: 2, str: '가나다', bool: false }
// obj2: { num: 2, str: '가나다', bool: false }
// 주요 내용
// 객체는 참조 자료형이다.
// 얕은 복사와 깊은 복사를 구분할 수 있어야 한다.
// 위는 얕은 복사이다.
// 원시타입은 기본적으로 깊은 복사이다.

// 배열도 객체이기 때문에 참조 자료형이다.

const array1 = [1, 'ABC', true];
const array2 = array1;
// array2 = []; // ⚠️ 오류
// ⭐️ const임에도 내부 값은 변경 가능함 주목
array2[0] = 3;
array2[1] = 'def';
array2[2] = false;

console.log('array1:', array1);
console.log('array2:', array2);

// 실행결과
// array1: [ 3, 'def', false ]
// array2: [ 3, 'def', false ]