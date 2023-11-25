// 커링 (Currying)
// 커링은 함수의 인자를 다루는 기법이다.
// 커링은 함수를 재사용할 수 있게 해준다.
// 커링은 함수를 다루는 고급 기법이다.
// 실무에서는 잘 사용하지 않지만 함수형 프로그래밍에서는 매우 중요한 기법이다.

// 기존의 코드
function addMultSubt(a, b, c, d) {
  return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(addMultSubt(2, 3, 4, 5), addMultSubt2(2, 3, 4, 5));

// 실행결과
// 15 15

// ⭐ 커링으로 작성된 함수
function curryAddMultSubt(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      };
    };
  };
}

// 단축 문법
const curryAddMultSubt2 = (a) => (b) => (c) => (d) => (a + b) * c - d;

console.log(curryAddMultSubt(2)(3)(4)(5), curryAddMultSubt2(2)(3)(4)(5));
// 실행결과
// 15 15


const curryAddMultSubtFrom2 = curryAddMultSubt2(2);
const curryMultSubtFrom5 = curryAddMultSubt2(2)(3);
const currySubtFrom20 = curryAddMultSubt2(2)(3)(4);

console.log(curryAddMultSubtFrom2);
console.log(curryMultSubtFrom5);
console.log(currySubtFrom20);
// 값이 다 채워지지 않았음에도 실행이 되는 이유는
// 함수가 실행되면서 함수가 실행되는 것이기 때문에
// 값이 다 채워지지 않아도 실행이 된다.

console.log(
    curryAddMultSubtFrom2(3)(4)(5),
    curryMultSubtFrom5(4)(5),
    currySubtFrom20(5)
  );
// 실행결과
// 15 15 15
  // 모자란 값을 다시 채워주면
// 실행이 된다.
