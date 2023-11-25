// while 반복문
// while ( true , false) { 실행문 }
// 조건이 true 상태라면 계속해서 실행문을 실행한다.
let y = 0;

while (y < 10) {
  console.log(y++);
}

// 실행결과
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
let x = 0;
while (x < 14) {
  const toContinue = x % 2 === 0;
  const toBreak = x > 7;
  const xNow = x++;

  if (toContinue) continue;
  if (toBreak) break;

  console.log(xNow);
}
// 코드 설명
// 짝수라면 건너뛰고
// 7보다 크면 멈훈다
// 그리고 xNow를 출력한다.
// 실행결과
// 1
// 3
// 5
// 7let x = 0;

// 좀 더 간결하게 짠 코드
while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}

// do while 반복문
// while과 다른점은 조건이 false여도 최초 한번은 실행한다.
// do에서 일단 실행하고
// while에서 조건을 확인한다.
let x2 = 12;

do {
  console.log(x2++);
} while (x2 < 10);

// 실행결과
// 12
