// 💡 필요한 것만 선별하여 가져오기
import { x, y } from './module1.js';
import { add, mult } from './module2.js';
import { Eagle } from './module3.js';
import * as funcs from './module4.js';
import mod5 from './module5.js';
import Big from 'https://unpkg.com/big.js@6.2.1/big.mjs';

console.log(
  add(x, y), mult(x, y)
);

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
eagle.hunt();


// 💡 로그 살펴볼 것!
console.log(funcs);

funcs.logResult(
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter(funcs.isOdd)
  .map(funcs.square)
  .join(', ')
);


console.log(mod5);

console.log(
  mod5.arry
  .filter(mod5.isEven)
  .join(', ')
);


const raceResults = await fetch(
  'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
.then(response => response.json())

console.log(raceResults);


// 부동 소수점
console.log(Big);

console.log(
  0.1 + 0.2,
  new Big(0.1).plus(0.2).toNumber()
);

console.log(
  0.2 * 0.7,
  new Big(0.2).times(0.7).toNumber(),
);

console.log(
  0.9 - 0.6,
  new Big(0.9).minus(0.6).toNumber()
);