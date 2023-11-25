// 1. 문제
let a = 1;
let b = 2;

{
  a = 3;
  let b = 4;

  console.log(a, b);
}

console.log(a, b);

//  어떤 값이 출력될까요?
// 답
// 3 4
// 3 2

// 2. 문제

const score = 79;
// 위와 같이 `score` 란 상수가 있을 때, 아래와 같이 학점을 출력하는 코드를 `if` 문으로 작성해보세요.

// > 90점 이상은 A
// 80점 이상 90점 미만은 B
// 70점 이상 80점 미만은 C
// 60점 이상 70점 미만은 D
// 60점 미만은 F
// >
if (score >= 90) {
  console.log("A");
}
if (score >= 80 && score < 90) {
  console.log("B");
}
if (score >= 70 && score < 80) {
  console.log("C");
}
if (score >= 60 && score < 70) {
  console.log("D");
}
if (score < 60) {
  console.log("F");
}

// 3. 문제
const food = "pasta"; // risotto, burger, suchi 등으로 변경
// 위와 같이 `score` 란 상수가 있을 때, 아래와 같이 학점을 출력하는 코드를 `if` 문으로 작성해보세요.

// `food` 에 이름이 들어간 음식이 속하는 카테고리를 출력하는 함수 `switch`  문을 작성하세요. 조건은 아래와 같습니다.

// > ‘pizza’와 ‘risotto’, ‘pasta’는 **‘Italian’**으로,
// ‘burger’는 **‘American’**으로,
// 기타 음식은 **‘Unknown’**으로 분류됩니다.
// >
switch (food) {
  case "pizza":
  case "risotto":
  case "pasta":
    console.log("**'Italian'**");
    break;
  case "burger":
    console.log("**'American'**");
    break;
  default:
    console.log("**'Unknown'**");
    break;
}

// 4. 문제

// for 문을 활용해서 1~20까지의 숫자 중 짝수를 로그에 찍는 코드를 작성하세요.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i % 2 || console.log(i);

}

// 5. 문제
const numbers = [1, 2, 3, 4, 5];
let countNumbers = 0;
//  배열 안의 숫자를 모두 더하는 코드를 작성해보세요.
for (let i of numbers) {
  countNumbers += i;
}

console.log("countNumbers", countNumbers);

// 6. 문제
let user = { id: 1, name: "Alice", job: "Developer" };

//  for문을 사용해서 name을 제외한 정보들을 출력하는 코드를 작성해보세요.



//  목표 결과:
//  id: 1
//  job: Developer
for (let key in user) {
  if (key !== "name") {
    console.log(key, user[key]);
  }
}

// 7. 문제
let count = 5;

//  count가 0이 될 때까지, 해당 값에 10을 곱한 값을 출력하는 코드를
//  while문으로 작성해보세요.
while (count > 0) {
  console.log(count * 10);
  count--;
}


// 답
// 0은 falsy이기 때문에 while문이 종료됨

// let count = 5;

// while (count) {
//     console.log(count-- * 10);
// }