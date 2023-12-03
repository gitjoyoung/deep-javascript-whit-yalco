// 상속 , 계승 inheritance

// 💡 상속 inheritance
// 서로 다른 클래스나 생성자 함수가 같은 속성들을 공유할 때
// 이들의 관계를 정의함으로써 코드의 중복을 줄이고 효율을 높임

// "B클래스는 A클래스에서 파생된다." - "B는 A의 하위분류"
// 자바스크립트는 프로토 타입으로 상속이 구현됨

class Bird {
  wings = 2;
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim() {
    console.log("수영중...");
  }
}
class EmperorPenguin extends Penguin {
  size = "XXXL";
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol);
// Bird { wings: 2 } Eagle { wings: 2, claws: 2 } Penguin { wings: 2 } EmperorPenguin { wings: 2, size: 'XXXL' }
for (const i of [
  // instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.
  ["1.", birdy instanceof Bird],
  ["2.", eaglee instanceof Bird],
  ["3.", eaglee instanceof Eagle],
  ["4.", pengdol instanceof Penguin],
  ["5.", pengdol instanceof Bird],
  // 6 만 false
  ["6.", birdy instanceof Eagle],
]) {
  console.log(i[0], i[1]);
}
// 실행 결과
// 1. true
// 2. true
// 3. true
// 4. true
// 5. true
// 6. false 이유는  birdy 의 생성한한 클래스 또는 그것들의 조상이 포함되지 않기 때문에

pengu.swim();
pengdol.swim();
// 에러
// eaglee.swim(); // 이글에는 swim이 없음

// 주요내용
// 클래스에서는 extends (부모클래스)로 상속관계 정의
// 자식 클래스에서 또 다른 클래스가 상속받을 수 있음
// 자식 클래스는 부모 클래스의 속성을 기본적으로 가져옴
// 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
// [[Protorype]]으로 상속관계 살펴볼 것 - ⭐️ 최종적으로 Object

class YalcoChicken {
  no = 0;
  menu = { 후라이드: 10000, 양념치킨: 12000 };

  constructor(name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce() {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order(name) {
    return `${this.menu[name]}원입니다.`;
  }
}
// 카페 서비스 추가
class YalcoChickenAndCafe extends YalcoChicken {
  cafeMenu = { 아메리카노: 4000, 라떼: 4500 };
  cafeOrder(name) {
    return `${this.cafeMenu[name]}원입니다.`;
  }
}

// 얄코치킨 클래스를 상속을 받은 자식에다가 추가 해줘도 잘 적용됨
const chain1 = new YalcoChickenAndCafe("서면", 2);

console.log(chain1);
//
// YalcoChickenAndCafe {
//     no: 2,
//     menu: { '후라이드': 10000, '양념치킨': 12000 },
//     name: '서면',
//     cafeMenu: { '아메리카노': 4000, '라떼': 4500 }
//   }
console.log(chain1.order("후라이드"), chain1.cafeOrder("라떼"));

// 10000원입니다. 4500원입니다.

// 오버라이딩 overriding
// 자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어씀

class Bird2 {
  wings = 2;
  canFly = true;
  travel() {
    console.log("비행중...");
  }
}
class Eagle2 extends Bird2 {
  claws = 2;
}
class Penguin2 extends Bird2 {
  canFly = false;
  travel() {
    console.log("수영중...");
  }
}

const eaglee2 = new Eagle2();
const pengu2 = new Penguin2();
console.log(eaglee2);
eaglee2.travel();
console.log(pengu2);
pengu2.travel();
// 실행 결과
// Eagle2 { wings: 2, canFly: true, claws: 2 }
// 비행중...
// Penguin2 { wings: 2, canFly: false }
// 수영중...

class YorkNannyYalcoChicken extends YalcoChicken {
  // 부모 메소드를 수정함
  introduce() {
    return `또 뭐 쳐먹으러 기어들어왔어.`;
  }
  order(name) {
    return `${this.menu[name]}원이여.`;
  }
}

const chain2 = new YorkNannyYalcoChicken("종로", 48);

console.log(chain2.introduce());
//   또 뭐 쳐먹으러 기어들어왔어.
console.log(chain2.order("양념치킨"));
// 12000원이여.

// super 키워드는 객체 리터럴 또는 클래스의 [[Prototype]] 속성에 접근하거나 슈퍼클래스의 생성자를 호출하는 데 사용됩니다.
class ConceptYalcoChicken extends YalcoChicken {
  #word = "";
  constructor(name, no, word) {
    // 슈퍼는 부모의 constructor를 호출 한 것과 같다
    super(name, no);
    this.#word = word;
  }
  introWithConcept() {
    // 수퍼를 하면 부모의 내용이 불러와짐
    return super.introduce() + " " + this.#word;
  }
  order(name) {
    return super.order(name) + " " + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken("도봉", 50, "피카피카~");
console.log(pikaChain);
console.log(pikaChain.introWithConcept());

console.log(pikaChain.order("후라이드"));
// 실행결과
// ConceptYalcoChicken {
//     no: 50,
//     menu: { '후라이드': 10000, '양념치킨': 12000 },
//     name: '도봉'
//   }
//   안녕하세요, 50호 도봉점입니다! 피카피카~
//   10000원입니다. 피카피카~

// super는 다른 클래스에서 상속받은 클래스에서만 사용 가능
// 자식 클래스의 constructor 내에서는 부모 클래스의 constructor를 가리킴
// 자식 클래스의 메서드 내에서는 부모 클래스를 가리킴
// 부모 클래스의 constructor나 메서드에 추가적인 동작을 넣기 위해 사용

class YalcoChicken2 {
  static brand = "얄코치킨";
  static contact() {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}

class ConceptYalcoChicken2 extends YalcoChicken2 {
  static contact() {
    super.contact();
    console.log("컨셉 가맹문의는 홈페이지를 참조하세요.");
  }
}

ConceptYalcoChicken2.contact();

// 얄코치킨입니다. 무엇을 도와드릴까요?
// 컨셉 가맹문의는 홈페이지를 참조하세요.
