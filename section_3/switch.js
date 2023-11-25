// 스위치 문
// 특정값에 대한 다수의 옵션이 있을때 사용


const fingersOut = 2;

switch (fingersOut) {
  // 순서 상관없음
  case 2:
    console.log('가위');
    break;  // break 를 만나면 switch 문을 빠져나옴
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  default:
    console.log('무효');
}

// 실행결과
// 가위


// 스위치 사용
//   case 2: case 3: 과 같이 2,3을 동시에 처리할 수 있음 
// default 값으로 처리할 수 없는 값이 들어왔을때 예외처리 가능
const startMonth = 1;
let holidays = '분기 내 휴일:';

switch (startMonth) {
  case 1:
    holidays += ' 설날';
  case 2:
 
    holidays += ' 3•1절';
    break;

  case 4:
  case 5:
    holidays += ' 어린이날';
  case 6:
    holidays += ' 현충일';
    break;

  case 7:
  case 8:
    holidays += ' 광복절';
  case 9:
    holidays += ' 추석';
    break;

  case 10:
    holidays += ' 한글날';
  case 11:
  case 12:
    holidays += ' 크리스마스';
    break;

  default: 
    holidays = '잘못된 월입니다.';
}

console.log(holidays);

// 실행결과
// 분기 내 휴일: 설날 3•1절

// 주요내용