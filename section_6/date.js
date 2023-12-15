// 날자와 관련된 빌트인 객체 내장함수
// 1. 현재 날짜와 시간

const now = new Date();

console.log(typeof now);
console.log(now);
// object
// 2023-12-11T11:16:29.837Z

// 객체로 반환

const nowStr = Date();

console.log(typeof nowStr);
console.log(nowStr);

// string
// Mon Dec 11 2023 20:16:43 GMT+0900 (대한민국 표준시)

//객체로 반환

// new와 함께 사용하면 인스턴스 객체
// 없이 사용하면 문자열 반환 - new Date().toString()과 같음

// 밀리초 기준
// 1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간
// ⚠️ 이 강의에서의 자정은 해당 일 0시 0분 0초 의미

console.log(new Date(0));
//   1970-01-01T00:00:00.000Z

// 윤년을 고려하지 않은 방식 대략 30년 1000
// 1000밀리초 = 1초 * 분 * 시간 * 하루 * 1년 * 30년
console.log(new Date(1000 * 60 * 60 * 24 * 365 * 30));
// 1999-12-25T00:00:00.000Z

// . 단위별 숫자 입력
// 연, 월 ( 0부터 시작 ) 필수
// 일, 시, 분, 초, 밀리초 옵션 없을 시 0

console.log(new Date(2022, 8));
// 2022-08-31T15:00:00.000Z
// utc 기반 시간으로 로컬환경에 맞춰서 표시됨
//한국에서는 9월 1일이여야 하지만

console.log(new Date(2022, 8, 20, 14, 35));
// 2022-09-20T05:35:00.000Z

console.log(new Date(2022, 8, 20, 14, 35, 47, 789));
// 2022-09-20T05:35:47.789Z

// dateString
// 특정 형식의 문자열 인식 가능
// ⚠️ 동작이 일관적이지 못함, 브라우저마다 차이 존재 - 권장하지 않음
console.log(new Date("August 20, 2022 14:35:47"));
// 2022-08-20T05:35:47.000Z

console.log(new Date("2022-08-20T14:35:47"));
// 2022-08-20T05:35:47.000Z

// 정적 메서드

// now
// 현재의 밀리초 숫자값 (앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환
console.log(Date.now());

// parse, UTC
// 주어진 시간의 밀리초 숫자값 반환
// parse는 dateString, UTC는 단위별 숫자를 받음

console.log(Date.parse("August 20, 2022 00:00:00 UTC"));
// 1660953600000

console.log(
  // 💡 시스템(실행 컴퓨터) 시간이 한국이면 9시간을 더한 시간을 입력해줘야
  // 위의 실행결과와 같은 결과가 나옴
  Date.parse("August 20, 2022 09:00:00")
);
// 1660953600000

console.log(
  // ⭐️ 월은 0부터 시작
  Date.UTC(2022, 7, 20, 0, 0, 0)
);
// 1660953600000

// 인스턴스 메서드
// 1. toString, toDateString, toTimeString
// 각각 전체, 날짜만, 시간만 나타내는 문자열 출력
// 시스템(컴퓨터)의 언어 설정별로 다르게 나타남

// 전부 출력
console.log(now.toString());
// Mon Dec 11 2023 20:56:17 GMT+0900 (대한민국 표준시)

// 년 월 날자 요일
console.log(now.toDateString());
// Mon Dec 11 2023

// 시간 부분
console.log(now.toTimeString());
// 20:56:17 GMT+0900 (대한민국 표준시)

// toLocaleString
// 주어진 언어 코드를 기준으로 표현한 문자열 반환
// 인자가 없을 시 시스템의 언어 적용

console.log(now.toLocaleString());
// 2023. 12. 11. 오후 8:57:51

console.log(now.toLocaleString("ko-KR"));
// 2023. 12. 11. 오후 8:57:51

// 각국에서 선호하는 날자 배열 순서가 바뀜

console.log(now.toLocaleString("en-US"));
// 12/11/2023, 8:57:51 PM

console.log(now.toLocaleString("de-DE"));
// 11.12.2023, 20:57:51

// 단위별 setter, getter 메서드들

for (i of [
  ["연:", now.getFullYear()],
  ["월:", now.getMonth()], // 0 ~ 11
  ["일:", now.getDate()],
  ["요일:", now.getDay()], // 0부터 일월화수목금토
  ["시:", now.getHours()],
  ["분:", now.getMinutes()],
  ["초:", now.getSeconds()],
  ["밀리초:", now.getMilliseconds()],
]) {
  console.log(i[0], i[1]);
}

//   연: 2023
// 월: 11
// 일: 11
// 요일: 1
// 시: 20
// 분: 59
// 초: 6
// 밀리초: 966
now.setFullYear(2022);
now.setMonth(7);
now.setDate(20);
// 💡 요일은 setter가 없음
now.setHours(14);
now.setMinutes(35);
now.setSeconds(47);
now.setMilliseconds(789);

console.log(now.toString());
// Sat Aug 20 2022 14:35:47 GMT+0900 (대한민국 표준시)

// 활용
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = "일월화수목금토"[now.getDay()];

console.log(`오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`);
// 오늘은 2022년 8월 20일, 토요일입니다.

// getTime, setTime
// 밀리초 숫자값을 set/get
const date1 = new Date(2020, 7, 20);
const date1value = date1.getTime();

console.log(date1.toString());
// Thu Aug 20 2020 00:00:00 GMT+0900 (대한민국 표준시)

console.log(date1value);
// 1597849200000

const date2 = new Date();

console.log(date2.toString());
// Mon Dec 11 2023 21:02:58 GMT+0900 (대한민국 표준시)

date2.setTime(date1value);

console.log(date2.toString());

// Thu Aug 20 2020 00:00:00 GMT+0900 (대한민국 표준시)

// getTimezoneOffset
// 시스템의 시간대와 UTC의 시간차를 분 단위로 반환
// 한국의 경우 9시간 차이
console.log(new Date().getTimezoneOffset() / 60);
// -9

//   toISOString
// 🔗 ISO 8061이란 형식의 문자열 반환
// UTC 기준으로 반환

// 시간차 존재
console.log(now.toISOString());
console.log(now.toString());

// 2022-08-20T05:35:47.789Z
// Sat Aug 20 2022 14:35:47 GMT+0900 (대한민국 표준시)

// 현재시각으로 맞추기
const now3 = new Date();
const timezoneOffset = now3.getTimezoneOffset() * 60000;
console.log(timezoneOffset );
// -32400000
const isoStr = new Date(now3.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now3.toString());
// 2023-12-11T21:05:22.502Z
// Mon Dec 11 2023 21:05:22 GMT+0900 (대한민국 표준시)
