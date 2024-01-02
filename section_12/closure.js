// 클로저 closure
// 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념 함수 중첩시

function func1() {
  const word = "Hello";

  function func2() {
    console.log(word);
  }

  return func2;
}

const logHello = func1();

logHello();
// Hello

// ogHello에는 func1 안의 함수인 func2가 반환되어 지정됨
// func1의 실행이 끝났음에도 불구하고, 해당 스코프 내의 값이 살아 있음
// func2와 func2가 선언된 환경(func1의 스코프)의 조합 - 클로저

function createCounter(start) {
  let num = start;

  return function () {
    console.log(++start);
    return start;
  };
}

const count = createCounter(10);

count(); // ⭐ 반복 실행해 볼 것
count(); // ⭐ 반복 실행해 볼 것
count(); // ⭐ 반복 실행해 볼 것
// 11
// 12
// 13

// 단지 값을 복사해서 갖는 것이 아니라, 해당 값이 저장되는 외부 환경 자체가 유지됨

// private field 흉내내기

function employeeCreator(name, age) {
  let _name = name;
  let _age = age;

  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) {
      _age = age;
    },
    getOlder: function (years) {
      _age += years;
    },
  };
}

const employee = employeeCreator("홍길동", 20);

console.log(employee);
// {
//   name: [Function: name],
//   age: [Function: age],
//   setAge: [Function: setAge],
//   getOlder: [Function: getOlder]
// }

console.log(employee.name(), employee.age());
// 홍길동 20


employee.setAge(25);
console.log(employee.name(), employee.age());
// 홍길동 25

employee.getOlder(3);
console.log(employee.name(), employee.age());
// 홍길동 28