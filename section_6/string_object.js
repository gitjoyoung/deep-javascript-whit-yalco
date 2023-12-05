// string 객체
// 문자열을 감싸는 래퍼객체

const strObj1 = new String();
const strObj2 = new String("Hello World!");

// 생성자 함수
console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString());
console.log(strObj2.valueOf(), strObj2.toString());
// 실행 결과
// [String: '']
// [String: 'Hello World!']
//
// Hello World! Hello World!

// new String 으로 값을 할당하면 객체로 출력된다

const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, "A", false]);
const fromObj = new String({ a: 1 });

console.log(typeof fromNum, fromNum);
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);
// object [String: '123']
// object [String: 'true']
// object [String: '1,A,false']
// object [String: '[object Object]']
console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());
// 123
// true
// 1,A,false
// [object Object]

// new 없이 사용하면
const str1 = String("Hello World!");
const str2 = String(123);
const str3 = String(true);
const str4 = String({ x: 1, y: 2 }); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);
// string Hello World!
// string 123
// string true
// string [object Object]
// string 1,2,3

// 유사 배열 객체
let myStr = "안녕하세요!";

console.log(myStr.length, myStr[0], myStr[myStr.length - 1]);
// 6 안 !

myStr[myStr.length - 1] = "?";
console.log(myStr); // 💡 배열과 달리 그대로
// 안녕하세요!

// 주요내용
// String은 원시값
// [] 접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
// 수정하려면 변수 값 자체를 다른 문자열로 대체해야 한다

for (const letter of myStr) {
  console.log(letter);
}
// 안
// 녕
// 하
// 세
// 요
// !

// 주요 내용
// length 프로퍼티: 글자 수 반환
// [] 안에 인덱스 숫자를 넣어 ~번째 글자 읽기(만) 가능
// for ... of문 사용 가능 이후 배울 이터러블이기 때문

const word = "Hello, World.";
console.log(word.toUpperCase(), word.toLowerCase());
// HELLO, WORLD. hello, world.

// ⭐️ 기존의 문자열은 바꾸지 않음! 다음의 메서드들 모두 마찬가지

console.log(word);
// Hello, World.

function areSameWords(word1, word2) {
  // 문자열이 대소문자로 비교할때 같은가
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords("Hello", "hello"),
  areSameWords("가나다", "가나다"),
  areSameWords("ABC", "DEF")
);
// true true false

// charAt, at
// 인자로 주어진 인덱스의 문자 반환
console.log("Hello World!".charAt(0), "안녕하세요~".charAt(2));
// H 하

// at 신문법 음수로 접근가능
console.log("안녕하세요~".at(1), "안녕하세요~".at(-1));
// 녕 ~

// indexOf, lastIndexOf
// 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
// 포함되지 않을 시 -1 반환

const word2 = "반갑습니다!";
console.log(word2.indexOf("습"), word2.lastIndexOf("습"));
// 2 2

const word3 = "아니, 하나마나한 걸 왜 하나?";
console.log(word3.indexOf("하나"), word3.lastIndexOf("하나"));
// 4 14

console.log("가나다라마".indexOf("하"), "가나다라마".lastIndexOf("하"));
// -1 - 1;
// 문자열이 없다면 -1 반환

// includes, startsWith, endsWith
// 인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환

const sentence = "옛날에 호랑이 한 마리가 살았어요.";

for (const word of ["옛날에", "호랑이", "살았어요.", "나무꾼"]) {
  console.log("includes", word, sentence.includes(word));
  console.log("startsWith", word, sentence.startsWith(word));
  console.log("endsWith", word, sentence.endsWith(word));
  console.log("- - - - -");
}
// includes 옛날에 true
// startsWith 옛날에 true
// endsWith 옛날에 false
// - - - - -
// includes 호랑이 true
// startsWith 호랑이 false
// endsWith 호랑이 false
// - - - - -
// includes 살았어요. true
// startsWith 살았어요. false
// endsWith 살았어요. true
// - - - - -
// includes 나무꾼 false
// startsWith 나무꾼 false
// endsWith 나무꾼 false
// - - - - -

// search
// 인자로 받은 🔗 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환

console.log(
  "하루가 7번 지나면 1주일이 되는 거야.".search(/[0-9]/),
  "하루가 일곱 번 지나면 일주일이 되는 거야.".search(/[0-9]/)
);
// 4 -1

// substring
// 인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환

const word4 = "ABCDEFGHIJKL";
const part = word4.substring(4, 8);

console.log(word4, part);

// 4 -1
// ABCDEFGHIJKL EFGH

console.log(word4.substring(4));
// 처음 4자를 제외
// EFGHIJKL

console.log(word4.substring(-1), word4.substring(4, 100), word4.substring(100));
// ABCDEFGHIJKL EFGHIJKL

// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로
