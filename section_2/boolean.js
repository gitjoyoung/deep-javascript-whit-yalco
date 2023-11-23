// 참거짓 

console.log(true, typeof true);
console.log(false, typeof false);



let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);


// 부정 연산자
console.log(
    true, !true, false, !false
  );
  
  console.log(
    true, !true, !!true, !!!true
  );
  
  console.log(
    false, !false, !!false, !!!false
  );

  console.log(
    true === !false,
    !(1 == '1'),
    !(1 === '1'),
    !(typeof false === 'boolean')
  );

//  AND / OR 연산자
  console.log(
    true && true,
    true && false,
    false && true,
    false && false,
  );

  console.log(
    true || true,
    true || false,
    false || true,
    false || false,
  );

  let x = 14;
// x = 6;
// x = 25;

console.log(
  (x > 10 && x <= 20) || x % 3 === 0
);



// 💡 드 모르간의 법칙
let a2 = true;
// a2 = fa2lse;
let b2 = true;
// b2 = fa2lse;

console.log(
  !(a2 && b2) === (!a2 || !b2),
  !(a || b2) === (!a && !b2)
); // 💡 항상 true




// 단축 평가
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');



// 삼항 연산자
console.log(
    1.23 ? true : false,
    -999 ? true: false,
    '0' ? true : false,
    ' ' ? true : false,
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false,
  );


  // ⚠️ true와 `같다`는 의미는 아님
console.log(
    1.23 == true,
    ' ' == true,
    {} == true
  );
  // 실행 결과
  // false false false




  // falsy 값
  console.log(
    0 ? true : false,
    -0 ? true : false,
    '' ? true : false,
    null ? true : false,
    undefined ? true : false,
    NaN ? true : false,
  );
  // 실행 결과
  // alse false false false false false
  // 주요 내용
  // falsy 값은 false로 간주되는 값
  // 0, -0, '', null, undefined, NaN 등이 있음