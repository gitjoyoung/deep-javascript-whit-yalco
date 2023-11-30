// 생성자 함수
// 생성자 함수의 필요성
// 객체지향의 시작

// 생성자 함수
// 얄코 치킨의 본사 객체라고 생각해보자
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

// 각각의 체인점들을 생성 하려고 한다
const chain1 = new YalcoChicken("판교", 3);
const chain2 = new YalcoChicken("강남", 17);
const chain3 = new YalcoChicken("제주", 24);
console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());

// 실행결과
// YalcoChicken { name: '판교', no: 3, introduce: [Function (anonymous)] } 안녕하세요, 3호 판교점입니다!
// YalcoChicken { name: '강남', no: 17, introduce: [Function (anonymous)] } 안녕하세요, 17호 강남점입니다!
// YalcoChicken { name: '제주', no: 24, introduce: [Function (anonymous)] } 안녕하세요, 24호 제주점입니다!

// new를 붙이지 않으면 undefined 반환
console.log(YalcoChicken("홍대", 30));
// 실행결과
// undefined
// 왜냐하면  YalcoChicken 함수는 반환값이 없음
// new를 붙여주면 생성자 함수가 되고 명시적으로 값을 반환하지 않아도 새로운 객체가 반환됨

// function으로 선언된 함수는 기본적으로 생성자 함수의 기능을 갖음
function func() {}
console.log(new func(), func); // func {} [Function: func]
//  func 자체는 함수 객체를 나타내는데, JavaScript에서 함수는 객체이므로 해당 함수 객체가 출력됨

// 주요내용
//생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
// 생성자 함수로 만들어진 객체를 인스턴스 instance 라 부름
// this.~로 생성될 인스턴스의 프로퍼티들 정의
// 생성자 함수는 new 연산자와 함께 사용
// 암묵적으로 this 반환
// 생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능

// 일반적인 객체 반환 함수
function createYalcoChicken(name, no) {
  return {
    name,
    no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    },
  };
}

const chain4 = createYalcoChicken("판교", 3);
const chain5 = createYalcoChicken("강남", 17);
const chain6 = createYalcoChicken("제주", 24);

console.log(chain4, chain4.introduce());
console.log(chain5, chain5.introduce());
console.log(chain6, chain6.introduce());

// 실행 결과
//  { name: '판교', no: 3, introduce: [Function: introduce] } 안녕하세요, 3호 판교점입니다!
// { name: '강남', no: 17, introduce: [Function: introduce] } 안녕하세요, 17호 강남점입니다!
// { name: '제주', no: 24, introduce: [Function: introduce] } 안녕하세요, 24호 제주점입니다!

// 생성자함수와 일반 객체 반환 함수와 차이점
// 일반 객체 반환함수는
// 객체를 반환하는 함수와 생성자 함수와 다른점
// YalcoChicken 생성자 함수는 인스턴트들이랑 유기적으로 연결되있다
// 아래와 같이 YalcoChicken의 프로토타입을 추가하면
// 미리선언한 chain1이나 new YalcoChicken 에서도 사용가능한 차이점으로 생성자함수를 사용한다

YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain1);

console.log(chain1.introEng());
console.log(new YalcoChicken("강남", 17).introEng());

// 실행결과
// Welcome to Yalco Chicken at 판교!
// Welcome to Yalco Chicken at 강남!

// 자바스크립트는 원래 class가 없었다 이후에 class를 추가하였다
//타 언어의 클래스와는 다르며 사용하기에 따라 더 강력함
// ⚠️ 사실 introduce와 introEng은 종류가 다름 (인스턴스 vs 프로토타입)

// 이후 프로토타입 섹션에서 자세히 배우게 될 것

// 💡 타 방식으로 만든 객체와의 차이
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };
}

function createYalcoChicken(name, no) {
  return {
    name,
    no,
    introduce() {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    },
  };
}

// 객체 리터럴
const chain7 = {
  name: "판교",
  no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  },
};

// 객체 반환 함수
const chain8 = createYalcoChicken("강남", 17);

// 생성자 함수
const chain9 = new YalcoChicken("제주", 24);

console.log(chain7, chain7 instanceof YalcoChicken);
console.log(chain8, chain8 instanceof YalcoChicken);
console.log(chain9, chain9 instanceof YalcoChicken);

// 실행결과
// { name: '판교', no: 3, introduce: [Function: introduce] } false
// { name: '강남', no: 17, introduce: [Function: introduce] } false
// YalcoChicken { name: '제주', no: 24, introduce: [Function (anonymous)] } true

// 주요 내용

// instanceof 조건으로 YalcoChicken 과 일치함을 확인 할 수 있다
//  객체 자체의 로그도 상세가 다름 유의 앞에 생성자 함수명이 붙음
//  instanceof : 객체가 특정 생성자 함수에 의해 만들어졌는지 여부 반환
//  프로토타입의 constructor의 체인이 해당 생성자 함수 포함하는지 여부
//  콘솔에서 [[Prototype]] 펼쳐서 확인해볼 것

//  생성자 함수 자체의 프로퍼티와 함수
// 주위해야 하는 부분
// 정적 메서드의 추가
YalcoChicken.brand = "얄코치킨";
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain10 = new YalcoChicken("판교", 3);
console.log(YalcoChicken.contact());

// console.log(chain10.contact());  이건 오류가 뜸
// 이유는 YalcoChicken.contact 의 추가는 정적 메서드를 추가 한 것 이고
// 정적메서드는 인스턴스 인 chain10에서 호출할수 없다
// 얄코치킨입니다. 무엇을 도와드릴까요?


//new 생략 실수 방지하기
function YalcoChicken(name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  };

  if (!new.target) {
    // 이 부분을 지우고 다시 해 볼 것
    return new YalcoChicken(name, no);
  }
}

const chain11 = new YalcoChicken("판교", 3);
const chain12 = YalcoChicken("강남", 17);

console.log(chain11, chain12);

// 실행결과
// YalcoChicken { name: '판교', no: 3, introduce: [Function (anonymous)] }
//  YalcoChicken { name: '강남', no: 17, introduce: [Function (anonymous)] }
