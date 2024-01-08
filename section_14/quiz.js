// ### 1.

// 50% 확률로 ‘홀’ 또는 ‘짝’을 반환하는 비동기 작업이 있습니다. 이를 세 번 연속으로 사용하여 그 결과를 쉼표로 구분한 문자열로 받아오려 합니다. 예를 들면 ‘홀, 짝, 홀’, ‘짝, 짝, 홀’과 같은 결과가 3초 후 출력되는 것입니다.
// 이와 같은 작업을 **콜백이 중첩된** 코드로 작성해보세요.
//  예시

function getOddEven(callback) {
  setTimeout(() => {
    const res = Math.random() < 0.5 ? "홀" : "짝";
    callback(res);
  }, 1000);
}

function concatRes(callback) {
  getOddEven((res1) => {
    getOddEven((res2) => {
      getOddEven((res3) => {
        const finalRes = res1 + ", " + res2 + ", " + res3;
        callback(finalRes);
      });
    });
  });
}

concatRes((res) => {
  console.log(res);
});
// 홀, 홀, 홀

// ### 2.

// 위 1번의 코드를 **Promise**를 사용해서 다시 작성해보세요.
function getOddEvenPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = Math.random() < 0.5 ? "홀" : "짝";
      resolve(res);
    }, 1000);
  });
}

function concatRes2() {
  let finalRes = "";

  return getOddEvenPromise()
    .then((res1) => {
      finalRes += res1;
      return getOddEvenPromise();
    })
    .then((res2) => {
      finalRes += ", " + res2;
      return getOddEvenPromise();
    })
    .then((res3) => {
      finalRes += ", " + res3;
      return finalRes;
    });
}

concatRes2().then((res) => {
  console.log(res);
});

// ### 3.

// 이번에는 **async & await**을 사용하는 코드로 다시 작성해보세요.
function getOddEvenPromise2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = Math.random() < 0.5 ? "홀" : "짝";
      resolve(res);
    }, 1000);
  });
}


async function concatRes3() {
  const res1 = await getOddEvenPromise2();
  const res2 = await getOddEvenPromise2();
  const res3 = await getOddEvenPromise2();

  return res1 + ", " + res2 + ", " + res3;
}

async function execute() {
  const res = await concatRes3();
  console.log(res);
}

execute();
