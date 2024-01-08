// ### 1.

// 50% 확률로 ‘홀’ 또는 ‘짝’을 반환하는 비동기 작업이 있습니다. 이를 세 번 연속으로 사용하여 그 결과를 쉼표로 구분한 문자열로 받아오려 합니다. 예를 들면 ‘홀, 짝, 홀’, ‘짝, 짝, 홀’과 같은 결과가 3초 후 출력되는 것입니다.
// 이와 같은 작업을 **콜백이 중첩된** 코드로 작성해보세요.
function Odd(call) {
  setTimeout(() => {
    const res = Math.random() < 0.5 ? "홀" : "짝";
    call(res);
  }, 1000);
}

function concatRes(callback) {
  Odd((res1) => {
    Odd((res2) => {
      const final = res1 + res2;
      callback(final);
    });
  });
}
concatRes((res) => {
  console.log(res);
});


// ### 2.

// 위 1번의 코드를 **Promise**를 사용해서 다시 작성해보세요.


function concatRes() {
  let finalRes = '';

  return getOddEven()
      .then(res1 => {
          finalRes += res1;
          return getOddEven();
      })
      .then(res2 => {
          finalRes += ', ' + res2;
          return getOddEven();
      })
      .then(res3 => {
          finalRes += ', ' + res3;
          return finalRes;
      });
}

concatRes().then(res => {
  console.log(res);
});


// ### 3.

// 이번에는 **async & await**을 사용하는 코드로 다시 작성해보세요.

function getOddEven() {
  return new Promise((resolve) => {
      setTimeout(() => {
          const res = Math.random() < 0.5 ? '홀' : '짝';
          resolve(res);
      }, 1000);
  });
}

async function concatRes() {
  const res1 = await getOddEven();
  const res2 = await getOddEven();
  const res3 = await getOddEven();

  return res1 + ', ' + res2 + ', ' + res3;
}

async function execute() {
  const res = await concatRes();
  console.log(res);
}

execute();
// { idx: 1, name: '복근대학교', majors: [ '육상', '체조', '투포환' ] }
