// 여러 프로미스를 병렬 처리하기 위한 Promise의 정적 메서드들

// 다섯 주자들이 동시에 질주
// 데드라인(밀리초) 안에 들어오지 못하면 탈락
let DEADLINE = 1450;

function getRunPromise (name) {
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`🚩 ${name} 도착 - ${(time)/1000}초`);
        resolve({name, time});

      } else {
        reject((`${name} 시간초과`));
      }
    }, time);
  });
}

console.log(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
);
// [
//   Promise { <pending> },
//   Promise { <pending> },
//   Promise { <pending> },
//   Promise { <pending> },
//   Promise { <pending> }
// ]
// 🚩 철수 도착 - 1.1623815759395484초
// 🚩 돌준 도착 - 1.1957333246384638초
// 🚩 영희 도착 - 1.224820490257123초
// 🚩 정아 도착 - 1.3906871599944473초
// 🚩 길돈 도착 - 1.4296210687098847초

// all - 
// 프로미스의 배열을 받아 동시에 진행
// 모두 성공하면 resolve된 값들을 배열로 반환 - then으로 받음
// 하나라도 실패하면 catch 실행

// 한 명이라도 탈락하면 전체 탈락
Promise.all(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(console.log)
.catch(console.error)
.finally(() => {
  console.log('- - 경기 종료 - -');
});

// 성공시 탑3 표시
Promise.all(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(arr => {
  return arr.sort((a, b) => {
    return a.time - b.time
  })
  .map(({name}) => name)
  .splice(0, 3)
  .join(', ');
})
.then(top3 => {
  console.log(`탑3: ${top3}`);
})
.catch(console.error)
.finally(() => {
  console.log('- - 경기 종료 - -');
});