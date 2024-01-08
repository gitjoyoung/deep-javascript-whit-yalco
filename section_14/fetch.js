// Fetch API

// Web API에서 제공하는 기능 - 즉 브라우저에서 제공
// 네트워크로부터 리소스를 받아오기 위한 다양하고 강력한 기능들 제공
// 보다 오래된 방법: 🔗 XMLHttpRequest
// fetch 메서드
// 네트워크 통신으로 원격에 요청을 보내고 답을 받아오는 프로미스를 반환

// 💡 결과가 Promise의 인스턴스임 확인
// console.log(
//   fetch("https://showcases.yalco.kr/javascript/mockserver/race-result")
// );
// // Promise { <pending> }

// fetch("https://showcases.yalco.kr/javascript/mockserver/race-result")
//   .then((response) => {
//     // console.log(response);
//     return response;
//   })
//   .then((response) => response.json())
//   .then("race-result" + console.log);

// [
//   { runner_idx: 1, record: 1454.3881 },
//   { runner_idx: 2, record: 1198.4922 },
//   { runner_idx: 3, record: 1404.1087 },
//   { runner_idx: 4, record: 1218.7154 },
//   { runner_idx: 5, record: 1374.5151 }
// ]

// 반환되는 결과 ( response )
// 요청의 결과에 대한 정보들을 담은 객체
// json 메서드 - 결과의 body로 받은 텍스트를 JSON 객체로 변환하여 반환

// 주소 등이 잘못된 경우 등 에러상황시 catch에서 처리

// fetch("https://WRONG-ADDRESS")
//   .then((response) => response.json())
//   .then(console.log)
//   .catch((msg) => {
//     console.error(` WRONG-ADDRESS 😳 에러 발생: ${msg}`);
//   })
//   .finally(() => {
//     console.log("- -  WRONG-ADDRESS 통신 종료 - -");
//   });

//   😳 에러 발생: TypeError: fetch failed
// - - 통신 종료 - -

// // 예제의 결과들 미리보기
const SERVER_URL = "https://showcases.yalco.kr/javascript/mockserver/";

// fetch(SERVER_URL + "race-result")
//   .then((response) => response.json())
//   .then(console.log)
//   .catch(console.error);
// [
//   { runner_idx: 1, record: 1454.3881 },
//   { runner_idx: 2, record: 1198.4922 },
//   { runner_idx: 3, record: 1404.1087 },
//   { runner_idx: 4, record: 1218.7154 },
//   { runner_idx: 5, record: 1374.5151 }
// ]

// [1, 2, 3, 4, 5].forEach((item) => {
//   fetch(`${SERVER_URL}runners/${item}`)
//     .then((response) => response.json())
//     .then(console.log)
//     .catch(console.error);
// });
// 비동기 충력이기에 순서가 보장되지 않음
// { idx: 1, name: '홍길동', school_idx: 2, grade: 3 }
// { idx: 4, name: '김두한', school_idx: 3, grade: 4 }
// { idx: 2, name: '전우치', school_idx: 1, grade: 4 }
// { idx: 5, name: '김춘삼', school_idx: 1, grade: 2 }
// { idx: 3, name: '임꺽정', school_idx: 2, grade: 1 }

// [1, 2, 3].forEach((item) => {
//   fetch(`${SERVER_URL}schools/${item}`)
//     .then((response) => response.json())
//     .then( console.log)
//     .catch( console.error);
// });

// { idx: 2, name: '근성대학교', majors: [ '씨름', '레슬링', '스모' ] }
// { idx: 1, name: '복근대학교', majors: [ '육상', '체조', '투포환' ] }
// { idx: 3, name: '박력대학교', majors: [ '야구', '축구', '농구' ] }


// // 연속 fetching 예제
// // 경기 결과를 받아온 뒤 1등 주자 선택
// // 해당 주자의 상세정보 받아온 뒤 학교 코드 추출
// // 해당 학교의 정보 받아오기

// // 프로미스 형태로 구현

// fetch(SERVER_URL + "race-result")
//   .then((result) => result.json())
//   .then((arry) => {
//     return arry.sort((a, b) => {
//       return a.record - b.record;
//     })[0].runner_idx;
//   })
//   .then((winnerIdx) => {
//     return fetch(`${SERVER_URL}runners/${winnerIdx}`);
//   })
//   .then((result) => result.json())
//   .then(({ school_idx }) => school_idx)
//   .then((schoolIdx) => {
//     return fetch(`${SERVER_URL}schools/${schoolIdx}`);
//   })
//   .then((result) => result.json())
//   .then(console.log)
//   .catch(console.error);
  // { idx: 1, name: '복근대학교', majors: [ '육상', '체조', '투포환' ] }


// // async, await으로 구현

async function getWinnersSchool() {
  
  const raceResult = await fetch(SERVER_URL + "race-result").then((result) =>
    result.json()
  );

  const winnerIdx = raceResult.sort((a, b) => {
    return a.record - b.record;
  })[0].runner_idx;

  const winnerInfo = await fetch(`${SERVER_URL}runners/${winnerIdx}`).then(
    (result) => result.json()
  );

  const schoolIdx = winnerInfo.school_idx;

  const schoolInfo = await fetch(`${SERVER_URL}schools/${schoolIdx}`).then(
    (result) => result.json()
  );

  console.log(schoolInfo);
}

getWinnersSchool();
// { idx: 1, name: '복근대학교', majors: [ '육상', '체조', '투포환' ] }