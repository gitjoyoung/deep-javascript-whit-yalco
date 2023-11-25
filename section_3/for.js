// for 반복문


// 일반 적인 사용법
// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0~4까지 출력
// 특이한 점은 콘솔에서 증가를시켜도 i가 증가한다는 점
for (let i = 0; i < 5; ) {
  console.log(i++); // ++i로 바꿔볼 것
}
// 실행결과
// 1
// 2
// 3
// 4

// i = 10 i -=2 같이 숫자를 감소시키는 경우도 가능
for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}
// 실행결과
// 10
// 8
// 6
// 4
// 2
// 0


// for문은 둘이상 사용가능
for (let x = 0, y = 10; x <= y; x++, y--) {
    console.log(x, y);
  }
// 실행결과
//   0 10
// 1 9
// 2 8
// 3 7
// 4 6
// 5 5

for (
  let x = true, y = 0, z = 0;
  y * z < 10;
  x = !x, x ? y++ : z++
) {
  console.log(y, z);
}

// 0 0
// 0 1
// 1 1
// 1 2
// 2 2
// 2 3
// 3 3

// 이터러블에 사용되는 반복문
// 배열, 문자열, Map, Set, DOM 컬렉션 등이 이터러블
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
// 실행결과
// 1
// 가나다
// false
// null
// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}

// 안
// 녕
// 하
// 세
// 요
// ~

// 객체를 순회할때 사용하는 반복문
// for ... in 문
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}
for (const k in lunch) {
  console.log(k, ':', lunch[k])
}
// 실행결과
// name : 라면
// taste : 매운맛
// kilocalories : 500
// cold : false

// 중요 내용
// 객체를 순회할때 k값에는 객체의 key값이 보여지고
// lunch[k]에는 객체의 value값이 보여진다


// for ...  of 문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}
// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
}
console.log('-------------');




// 배열의 복사
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];
// let 키워드를 사용해서 number2에 할당함으로써
// numbers1의 값을 복사 가공할 수 있음
for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);
// 실행결과
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ] [
//   3, 4,  5,  6,  7,
//   8, 9, 10, 11, 12
// ]

// continue, break
// continue는 반복문을 계속 실행하고 싶을때 사용
// break는 반복문을 종료하고 싶을때 사용
// continue와 break는 for문, while문, do while문에서 사용가능
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
console.log('for 루프 종료');

//실행결과
// 1
// 2
// 4
// 5
// 7
// 8
// 10
// 한단계만 건너뛰고 싶을때 사용



for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// 반복문을 멈추고 싶을때 break를 사용
console.log('for 루프 종료');

// 실행결과
// 1
// 2
// 3
// 4

// 레이블 문
// 레이블 문은 반복문 앞에 레이블을 붙여서
// break나 continue와 함께 사용하는 문법
// 실수에서는 잘 사용하지 않음
// 해당 레이블의 의미는 outer inner의 구분으로
// outer의 경우 바깥쪽 반복문을 의미하고
// inner의 경우 안쪽 반복문을 의미하고 
// inner안에서 continue outer를 사용하면
//inner의 반복문을 멈추고 outer의 반복문을 실행함
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}

// 실행결과


// 1 1 1
// 1 3 3
// 1 5 5
// 1 7 7
// 2 1 2
// 2 3 6
// 2 5 10
// 2 7 14
// 3 1 3
// 3 3 9
// 3 5 15
// 3 7 21
// 4 1 4
// 4 3 12
// 4 5 20
// 4 7 28
// 5 1 5
// 5 3 15
// 5 5 25
// 6 1 6
// 6 3 18
// 7 1 7
// 7 3 21
// 8 1 8
// 8 3 24