// VS Code의 디버깅 툴
// 타 에디터/IDE에서도 유사 기능들 제공

let x = 1;
const y = Math.ceil(Math.random() * 10);

const rollDice = () => {
  const result = Math.ceil(Math.random() * 6);
  return result;
}

x += y; // 🔴
x *= y;
x -= y;
x ** (y % 3 + 1); // 🔴

for (let i = 0; i < 5; i++) {
  x = addOrSubtDice(x); // 🟢
}

try { x.toUpperCase(); } catch (e) {}
// x.toUpperCase();

function addOrSubtDice (x) {
  let dice = rollDice();
  if (Math.random() > 0.5) dice *= -1; // 🟡
  x += dice; // 위에 조건부 넣을 시 브레이크포인트 추가
  return x;
}

x **= 2; // 🔴

console.log(x);

// 먼저 몇 번 실행해보기


// 1. 기본 디버깅
// 🔴 표시된 라인들에 Breakpoint 브레이크포인트 달기
// Run and Debug 탭 열고 Node.js 모드로 디버깅 실행
// Continue : 다음 브레이크포인트로 건너뜀
// Step Over : 다음 라인으로 넘어감
// 💡 VARIABLES 섹션에서 변수들의 값 확인하기
// 💡 중간에 x, y의 값 수동으로 변경해보기
// BREAKPOINTS 섹션에서 브레이크표인트들 비활성화, 전체삭제 해보기


// 2. 함수로 진입하기
// 함수를 실행하는 라인에서 Step Into를 사용하여 함수로 진입
// 👉 모든 라인을 확인하려면 Step Into로 모두 진행해도 무관
// Step Out을 사용하여 빠져나오기
// 함수 내에 브레이크포인트가 걸려 있다면 Step Into하지 않아도 진입
// 💡 CALL STACK 섹션에서 함수 호출마다의 스택 확인하기
// 💡 VARIABLES 섹션에서 각 스택에 속한 변수, this 값 확인하기


// 3. 오류와 예외처리된 사항 확인하기
// Caught Exceptions 테스트
// Uncaught Exceptions 체크온하고 오류 발생시킨 뒤 테스트해보기


// 4. 특정 값 WATCH하기
// x, y, dice를 WATCH섹션에 추가하고 테스트
// !!(x % 2) 등의 표현식 넣어보기


// Conditional Breakpoint 걸어보기
// 🟡 표시된 라인에 dice < 3 조건의 Expression 브레이크포인트 걸어보기
// 🟢 표시된 라인에 > 3 조건의 Hit Count 브레이크포인트 걸어보기

