// 1 인자로 주어진 문자열에서 첫 번째 대문자를 찾아 로그로 출력하는 함수를 작성해보세요. 문자열에는 알파벳만 포함된다고 가정합니다.

function findFirstCapital(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      console.log(str[i]);
      return;
    }
  }
  console.log("대문자 없음");
}
// 활용예
findFirstCapital("helloWorld"); // W
findFirstCapital("helloworld"); // 대문자 없음

// 2. 인자로 주어진 문장에 포함된 모든 단어들의 마지막 글자를 출력하는 함수를 작성해보세요.

function printLastChars(str) {
  const arr = str.split(" ");
  // for (const word of sentence.split(' '))
  arr.forEach((item) => {
    console.log(item.at(-1));
  });
}
printLastChars("Hello world from JavaScript");

//  3. 각 요소가 숫자라면 그것이 정수 또는 실수임을 출력하도록 코드를 작성해보세요.
//  실수라면 소수 두 자리까지만 나타내세요.

const arr = [1, "text", 3.14, 5, { key: "value" }, 6.28732, 7];

for (const item of arr) {
  if (typeof item === "number") {
    if (Number.isInteger(item)) {
      console.log(item + "은 정수입니다");
    } else {
      console.log(item + "은 실수 입니다");
    }
  }
}

// ### 4.

// 인자로 주어진 반지름으로 원의 넓이를 출력하는 함수를 작성하세요. (원주율 * 반지름의 제곱)

//  실행 예시

function calculateCircleArea(num) {
  console.log(Math.pow(num, 2) * Math.PI);
}

calculateCircleArea(5); // 78.53981633974483

// ### 5.

// 2분의 1 확률로 `true` 또는 `false` 를 출력하는 코드를 작성해보세요.

console.log(Math.random() > 0.5);
console.log(Math.random() > 0.5);

console.log(Math.random() > 0.5);
console.log(Math.random() > 0.5);

// ### 6.

// 인자로 연, 월, 일을 숫자로 받아 해당 날짜가 주말인지 여부를 Boolean으로 반환하는 함수를 작성해보세요.

function isWeekend(year, month, day) {
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

// 사용 예시
console.log(isWeekend(2023, 11, 3)); // false
console.log(isWeekend(2023, 11, 4)); // true
console.log(isWeekend(2023, 11, 5)); // true
