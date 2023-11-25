// 블록문과 스코프


{
    const x = 'Hello';
    let y = 'world!';
    console.log(x, y);
  }
  // 실행결과
  // Hello world!

  // 객체 밖에서 출력하면 에러가 난다
//   console.log(x);
//   console.log(y);
// 실행결과
// ReferenceError: x is not defined

const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);
// 실행결과
// 0 Hello!

{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~';

  console.log(xx, yy);
  // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}
// 주요내용
// 블록문 안에서 범위는 밖과 달라짐
// const xx를 재선언했지만, 블록문 안에서 선언한 xx가 적용됨
// 실행결과
// 1 안녕하세요~


console.log(xx, yy);
// 실행결과
// 0 Hello!


// 스코프 체인
// 스코프 체인은 스코프가 계층적으로 연결된 것을 말함
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);

// 실행결과
// 시점 1: 0 1 2
// 시점 2: A B 2
// 시점 3: 가 B 2
// 시점 4: A B 2
// 시점 5: 0 1 2
// 주요내용
// 블록안에서 해당 변수 상수를 찾지 못하면 바깥쪽으로 나가서 찾음
// 메모리의 관점에서 전역변수는 전역 메모리에 저장되고, 지역변수는 지역 메모리에 저장됨
// 전역 변수나 상수의 사용을 최소화하는 것이 좋음