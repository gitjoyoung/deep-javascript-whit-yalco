// 에러 핸들링 error handling 의 필요성
// 에러/에러 error 발생에 대비하지 않으면 프로그램이 종료됨
console.log('에러 발생 전');

// ⚠️ 오류를 발생시키는 코드
(3).split('');

// 출력되지 않음
console.log('에러 발생 후');

// 자바스크립트의 에러 핸들링

// 1. try ... catch 문
console.log('에러 발생 전');

try {
  (3).split('');

} catch (e) {
  console.error('🛑 에러!!', e);
}

console.log('에러 발생 후');

// try 블록
// 에러 발생 여지가 있는 코드 포함
// 이곳에서 발생한 에러는 프로그램을 멈추지 않음
// catch 블록
// 에러 발생시 실행할 코드 포함
// 발생한 오류 객체를 인자로 받음
const arr = ['ABC', '가나다', 123, '123'];

function getLetterArray (str) {
  // 💡 인자로 어떤 타입의 값이 주어질지 모르는 상황
  try {
    return str.split('');

  } catch (e) {
    console.error('🛑 에러!!', e);
    return [];
  }
}

arr.forEach(i => {
  console.log(getLetterArray(i));
});

// try ... catch ... finally 문
// finally 블록
// 오류가 발생 여부와 관계없이 한 번 실행되는 코드 포함
// 아래와 같은 경우 널리 사용

function connect () { console.log('☀️', '통신 연결'); }
function disconnect () { console.log('🌙', '통신 연결 해제'); }
function sendArray (arr) { console.log('전송', arr); }

function sendStringAsArray (str) {
  connect();

  try {
    sendArray(str.split(''));
    return true;

  } catch (e) {
    console.error('🛑 에러!!', e);
    return false;

  } finally {
    // 💡 전송 성공 여부와 관계없이 연결은 끊어야 함
    disconnect();
    console.log('- - - - - - - -');
  }

  // ❓ 이곳에 넣는 것과 무엇이 다른가?
  // 아래로 대체하여 실행해 볼 것
  // disconnect();
  // console.log('- - - - - - - -');
}

['ABC', '가나다', 123, '123'].forEach(i => {
  console.log(
    sendStringAsArray(i) 
    ? '[성공]' : '[실패]', '\n\n'
  );
});

// try나 catch 문에 return이 있더라도 반드시 실행!


// Error 객체
// 에러 발생 시 던져지는 thrown 객체
// 에러에 대한 정보를 담고 있음
// 💡 에러가 발생하지 않아도, 직접 생성하여 던지기 가능
// 👉 MDN 문서 보기
// 1. 기본 생성과 사용법

const error2 = new Error('뭔가 잘못됐어');

console.error(error2);

// 두 번째 인자로 이유를 명시할 수도 있음
const error3 = new Error(
  '뭔가 잘못됐어',
  { cause: '뭘 잘못했으니까' }
);

console.error(error3);
// 기본 인스턴스 프로퍼티와 메서드
console.log(error.name);
console.log(error.message);

// cause를 입력했을 경우
console.log(error.cause);
// 에러 자체를 로그 출력하면 나오는 문구
console.log(error.toString());

// 의도적으로 에러 발생시키기
throw new Error('이유를 묻지 마라');

// 에러의 여러 종류
// ⭐ 아래의 에러들은 모두 Error부터 상속받음
// 주요 에러	설명
// SyntaxError	문법에 이상이 있을 때
// TypeError	주어진 명령에 적절한 자료형이 아닐 때
// ReferenceError	잘못된 값을 참조했을 때
// RangeError	유효한 범위를 벗어나는 숫자가 사용되었을 때
// 어떤 문제에 의한 에러인지 쉽게 식별 가능하도록 함
const x x;

const errorFuncs = [
  // 자료형에 맞지 않는 메서드 호출
  () => { (3).split(''); },

  // 선언되지 않은 함수 호출
  () => { hello(); },

  // 부적절한 숫자를 인자로 전달
  () => { (123.45).toFixed(-1); }
];
errorFuncs.forEach(func => {
  try {
    func();

  } catch (e) {
    console.error(e);
    console.log(e.name);
    console.log(e.message, '\n\n');
  }
});

// 오류에 종류에 따라 대처하기
errorFuncs.forEach(func => {
  try {
    func();

  } catch (e) {
    if (e instanceof TypeError) {
      console.error('자료형 확인하세요.');
      return;
    }
    if (e instanceof ReferenceError) {
      console.error('선언 안 된 거 쓴 거 없는지 확인하세요.');
      return;
    }
    console.error('아니, 뭘 한 거에요?');
  }
});

// 직접 오류를 생성하여 던지기
// 컴퓨터가 인지하지 못하는 에러 수동 발생
// 특정 월의 당번으로 지원하는 함수
function applyForMonth (date) {
  try {
    if (typeof date !== 'number') {
      throw new TypeError('숫자로 입력해주세요.');
    }
    if (date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력해주세요.');
    }

    console.log(`${date}월 당번으로 등록되셨습니다.`);

  } catch (e) {
    console.error('🛑 에러 발생!', e);
    console.log('다시 등록해주세요.');
  }
}
applyForMonth(5);
applyForMonth('5');
applyForMonth(13);

// 커스텀 에러 만들기
class MilitaryError extends Error {
  constructor (position, ...params) {
    super(...params);

    this.name = 'MilitaryError';

    switch (position) {
      case '이병':
        this.message = '개판이군. 맞선임 데려와봐.';
        break;
      case '일병':
        this.message += ' 엎드려 뻗쳐.';
        break;
      case '상병':
        this.message = '짬을 거꾸로 먹었나. ' + this.message;
        break;
      default:
        this.message = '집에 갈 때 됐다 이거지? ㅎㅎ';
    }
  }
}
class Soldier {
  constructor (position) {
    this.position = position;
  }

  speak (word) {
    console.log(this.position + ':', word);
    try {
      if (!'다나까'.includes(word.at(-1))) {
        throw new MilitaryError(
          this.position,
          '군대에서 모든 말은 다나까로 끝낸다.'
        );
      }

    } catch (e) {
      console.error(e);
    }
  }
}
['이병', '일병', '상병', '병장'].forEach(pos => {
  const soldier = new Soldier(pos);
  soldier.speak('무슨 일입니까');
  soldier.speak('왜요');
});

// 에러 버블링 error bubbling
// 다른 함수를 호출했을 때
// 에러 발생시 해당 함수에서 잡지 않으면 호출한 곳으로 던져짐
// 다중 호출시 에러를 핸들링하는 코드가 있는 호출자까지 전달됨
function func1 () {
  throw new Error('에러');
}

function func2 () {
  func1();
}

function func3 () {
  func2();
}

function func4 () {
  try {
    func3();

  } catch (e) {
    console.error(e);
  }
  console.log('실행완료');
}

func4();
// 에러는 가능한 발생 곳 가까이서 처리하는 것이 좋음
function func1 (e) { // 사원
  try {
    if (e) { throw e }
    console.log('저 가 봐도 되죠?');
    console.log('- - - - - - - - - -');

  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error('저 이건 알아요!', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('대리님, 이거 뭐에요?');
    throw e; // 💡 처리하지 못하는 에러는 윗선으로 던짐
  }
}

function func2 (e) { // 대리
  try {
    func1(e);
  } catch (e) {
    if (e instanceof TypeError) {
      console.error('내가 할 테니 가봐요.', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('부장님, 이건 제 선에서 안 되겠습니다.');
    throw e;
  }
}
function func3 (e) { // 부장
  try {
    func2(e);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.error('잘 하자, 응?', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('사장님, 이것 좀 보셔야겠습니다.');
    throw e;
  }
}
function func4 (e) { // 사장
  try {
    func3(e);

  } catch (e) {
    console.error('전원 집합.', e);
  }
}

func4();
func4(new SyntaxError());
func4(new TypeError());
func4(new ReferenceError);
func4(new RangeError);