// 조건문

const open = true;

// 한줄 코드
if (open) console.log('영업중입니다.');
// 실행결과
// 영업중입니다.

const x = 22;

if (x % 4) {
  if (x % 2) {
    console.log('홀수입니다.');
  } else {
    console.log('짝수입니다.');
  }
} else {
  console.log('4의 배수입니다.');
}
// 실행결과
// 짝수입니다.


// 권장하는 코드
// if문 단일 사용으로 가독성이 좋아짐
function evalNum () {
    const x = 21;
  
    if (x % 2) {
      console.log('홀수입니다.');
      return;
    }
  
    if (x % 4) {
      console.log('짝수입니다.');
      return;
    }
  
    console.log('4의 배수입니다.');
  }
  
  evalNum();
  console.log('블록문 바깥');