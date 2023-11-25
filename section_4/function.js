// 함수
// 가장 중요한 자바스크립트의 특징 중 하나는 함수이다.
// 함수는 자바스크립트의 거의 모든 것을 구성하는 기본 구성 요소이다.
// 함수는 자바스크립트의 핵심이며, 자바스크립트를 이해하는데 꼭 필요한 개념이다.

// 기본적인 함수
// 더하기 함수
// 함수의 인자는 pragameter(매개변수)라고 한다.
function add(x, y) {
    return x + y; // ⭐️ 값을 반환
  }
// 사용부분은 argument(인자)라고 한다.
  let z = add(2, 3);
  
  console.log(z);
// 실행결과
// 5


  function isOdd (x) {
    return !!(x % 2);
  }
  
  let num = 12;
  
  console.log(
    `${num}(는)은 ${
      isOdd(num) ? '홀' : '짝'
    }수입니다.`
  );

// 실행결과
//  12(는)은 짝수입니다.

// 함수의 호이스팅
// 함수의 정의문보다 호출문이 먼저 나와도
// 정상적으로 실행된다.
// 변수나 let 상수는 const 불가능! (var 제외)
console.log(add(2, 7));

function add (x, y) {
  return x + y;
}

// 함수를 정의하는 방법들
// 상수나 변수에 함수 대입 가능
const subt = function (x, y) {
    return x - y;
  }
  
  console.log(subt(7, 2));

// 함수의 재정의
// 중요한 개념
// 💡 기존의 함수를 재정의하는것도 가능하다
add = function (x, y) {
    console.log(`${x}와 ${y}를 더합니다.`);
    console.log(`결과는 ${x + y}입니다.`);
    return x + y;
  }
  
  console.log(add.description , add(2, 7));

