// 디스트럭쳐링  destructuring
//
// 보통 값을 넣어줄때
// const obj1 = {
//     x: 1, y: 2, z: 3
//   };

//   const x = obj1.x;
//   const y = obj1.y;
//   const z = obj1.z;

//   console.log(x, y, z);

const obj1 = {
  x: 1,
  y: 2,
  z: 3,
};

//구조 분해 할당
const { x, y, z } = obj1;

console.log(x, y, z);
// 실행 결과
// 1 2 3



// length 도 분해할당으로 꺼낼 수 있다
const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1;
console.log(length);
// 실행 결과
//  5




// ⭐️ 함수 인자값의 가독성을 위해 객체를 사용할 때

// 인자가 많은 함수 - ⚠️ 좋지 않음!
function introduce(name, age, job, married) {
  console.log(
    `제 이름은 ${name}, ` +
      `나이는 ${age}세구요. ` +
      `직업은 ${job}, ` +
      `${married ? "기혼" : "미혼"}입니다.`
  );
}

// 여러 인자, 순서 중요 - 가독성 떨어짐
introduce("김철수", 28, "개발자", false);
// 제 이름은 undefined, 나이는 undefined세구요. 직업은 undefined, 미혼입니다.


// 인자를 하나의 객체로 묶어 받음
function introduce(person) {
  console.log(
    `제 이름은 ${person.name}, ` +
      `나이는 ${person.age}세구요. ` +
      `직업은 ${person.job}, ` +
      `${person.married ? "기혼" : "미혼"}입니다.`
  );
}

// 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
const person1 = {
  job: "개발자",
  age: 28,
  married: false,
  name: "김철수",
  blood: "O", // 추가 인자 무관
};

introduce(person1);
// 제 이름은 김철수, 나이는 28세구요. 직업은 개발자, 미혼입니다.


// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
    // 순서 무관
    // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄
  
    console.log(`제 이름은 ${name}, `
      + `나이는 ${age}세구요. `
      + `직업은 ${job}, `
      + `${married ? '기혼' : '미혼'}입니다.`
    )
  }
  
  const person2 = {
    job: '개발자',
    age: 28,
    married: false,
    name: '김철수',
    blood: 'O'
  };
  
  introduce(person2);
  // 제 이름은 김철수, 나이는 28세구요. 직업은 개발자, 미혼입니다.