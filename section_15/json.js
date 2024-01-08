// JSDoc
// 자바스크립트 코드에 주석을 달기 위한 🔗 마크업 언어
// 에디터, IDE에서는 작성된 내용에 따라 코드 힌팅 등의 기능 제공
// 👉 마치 타입스크립트 등의 언어처럼 인자 등의 자료형 제안 - 강제되지는 않음
// 도구를 통해 웹 문서 등으로 출력될 수 있음


const TITLE = 'JSDoc 사용하기';

const PI = '3.14';

/** 코드의 제목으로 사용될 문자열 */

// @type - 자료형 명시, @const - 상수임 명시
/**
 * 원주율
 * @type {number}
 * @const
 */

/**
 * 원주율
 * @const {number}
 */

// @param - 인자

const add = (x, y) => x + y;

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} 두 수의 합
 */

add

// @typedef, @property - 커스텀 객체 타입 지정
/**
 * @typedef {Object} PersonObj 사람 객체
 * @property {string} name 이름
 * @property {number} age 나이
 * @property {boolean} married 기혼여부
 */

/**
 * 
 * @param {string} name 이름
 * @param {number} age 나이
 * @param {boolean} married 기혼여부
 * @returns {PersonObj}
 */
function getPersonObj (name, age, married) {
  return {name, age, married}
}

// 아래와 같이 정의 후 person1 사용해 볼 것
const person1 = getPersonObj('홍길동', 20, false);

// @constructor, @class - 생성자 용도로 작성된 함수, 클래스
// new 키워드와 함게 사용하여 객체를 생성함
// 클래스의 생성자에는 @constructs

function Person (name, age) {
  this.name = name;
  this.age = age;
}

/**
 * 사람 객체 생성 함수
 * @constructor 
 * @param {string} name 
 * @param {number} age 
 */

/**
 * 새 클래스
 * @class
 */
class Bird {
  /**
   * @constructs
   * @param {string} name 
   */
  constructor (name) {
    this.name = name;
 }
}

// @todo - 이후 해야 할 일 표시

/**
 * @todo 실행 속도 개선 필요
 */
function slowFunction () {
  console.log('느릿느릿');
}

// @see, @link - 참조, 링크

/**
 * @see {@link https://www.yalco.kr} 얄코사이트 참조
 */
function yalcoFunc () {
  // ...
}

// @readonly - 읽기 전용
// 강제성은 없음

/**
 * @readonly
 * @const {string}
 */
const READONLY = '건들지 마라';

// 문서 생성해보기
// API 문서 생성기 🔗 JSDoc 사용
// ⭐ 프로젝트 디렉토리에 _로 시작하는 폴더가 포함되지 않아야 함 - 위 생성기의 버그

// . Node.js 환경에 JSDoc 설치
// npm install -g jsdoc
// 맥에서는 앞에 sudo를 붙여 실행한 뒤 맥 로그인 암호 입력