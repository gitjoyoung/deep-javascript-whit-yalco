// 콜백 지옥 callback hell
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 500);
// }, 500);

// 1
// 2
// 3
// 4
// 5

// 연속적으로 비동기 코드를 써야 하는 경우
// 위와 같이 콜백 함수 안에 또 다른 콜백 함수를 넣어야 하는 상황 발생 - 콜백 지옥
// 횟수가 많을수록 가독성도 낮아지고 직관성이 떨어짐
// 실전에서는 더더욱 복잡하고 난해해짐

// 🏃🏃🏃 릴레이 예제
// 철수, 영희, 돌준, 정아, 길돈이 치례로 이어달리기는 하는 코드
// ⭐ 각 골인시간 기록 - 이전 콜백함수의 결과가 다음 콜백함수로 넘겨져 축적됨
// 한 주자라도 데드라인(밀리초)을 넘기면 실패 - 주자마다 다른 실패 메시지 출력
// 완주 실패시 😢 완주 실패 - ${전체 소요시간} 출력
// 실패든 성공이든 마지막에 - - 경기 종료 - - 출력

const DEADLINE = 1500;

function relayRun(name, start, nextFunc, failMsg) {
  console.log(`👟 ${name} 출발`);
  const time = 1000 + Math.random() * 500;

  setTimeout(() => {
    if (time < DEADLINE) {
      console.log(`🚩 ${name} 도착 - ${(start + time) / 1000}초`);
      nextFunc?.(start + time);
    } else {
      console.log(failMsg);
      console.log(`😢 완주 실패 - ${(start + time) / 1000}초`);
    }

    if (time >= DEADLINE || !nextFunc) {
      console.log("- - 경기 종료 - -");
    }
  }, time);
}

relayRun(
  "철수",
  0,
  (start1) => {
    relayRun(
      "영희",
      start1,
      (start2) => {
        relayRun(
          "돌준",
          start2,
          (start3) => {
            relayRun(
              "정아",
              start3,
              (start4) => {
                relayRun("길돈", start4, null, "아아, 아깝습니다...");
              },
              "정아에게 무리였나보네요."
            );
          },
          "돌준이 분발해라."
        );
      },
      "영희가 완주하지 못했네요."
    );
  },
  "철수부터 광탈입니다. ㅠㅠ"
);

// 👟 철수 출발
// 🚩 철수 도착 - 1.031435763151387초
// 👟 영희 출발
// 🚩 영희 도착 - 2.0819326401459355초
// 👟 돌준 출발
// 🚩 돌준 도착 - 3.2349140572990045초
// 👟 정아 출발
// 🚩 정아 도착 - 4.438166447233023초
// 👟 길돈 출발
// 🚩 길돈 도착 - 5.759755589990514초
// - - 경기 종료 - -

// 프로미스 promise
// (보통 시간이 걸리는) 어떤 과정 이후 주어진 동작을 실행할 것이란 약속
// 중첩된 비동기 코드를 직관적이고 연속적인 코드로 작성할 수 있도록 함

const borrow = 20;

// 빌린 돈의 10%를 더해 값겠다는 약속
// reject는 지금 사용하지 않음
const payWith10perc = new Promise((resolve, reject) => {
  resolve(borrow * 1.1);
});

payWith10perc.then((result) => {
  console.log(result + "만원");
});
// 22만원

// 생성자 Promise
// 새로운 약속을 하는 코드
// 인자로 받는 콜백함수의 첫 번째 인자 resolve ( 이름은 관례 ) - 약속 이행 성공시, 반환할 값 넣어 실행
// 프로미스 인스턴스 ( 만들어진 약속 ) 의 then 메서드
// resolve를 통해 ( 약속대로 ) 반환된 결과를 인자로 하는 콜백 함수를 넣음
// ⭐ 또 다른 프로미스를 반환 - 체이닝 가능

const payWith10perc2 = new Promise((resolve, reject) => {
  // 💡 내부에서 비동기 코드 사용
  setTimeout(() => {
    resolve(borrow * 1.1);
  }, 1000); // 1초 후 갚겠음
});

// ⚠️ 콘솔에서 분리해서 실행하면 안 됨!
// 프로미스가 생성되는 순간부터 시간 경과
payWith10perc2.then((result) => {
  console.log(result + "만원");
});
// 22만원