// 문제 1

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

console.log(multiplyByTwo(3)); // 6
console.log(multiplyByFive(3)); // 15
// 클로저를 활용해서, 함수 생성시 인자로 주어진 수를 함수 실행시 인자로 주어진 수와 곱한 결과를 반환하는 코드를 작성해보세요.
function multiplyBy(firstNum) {
  
  return function(secondNum){
    return firstNum * secondNum;
  };
}

// 문제 2

const rectangle1 = {
  width: 10,
  height: 5,
  printArea: printArea
};

const rectangle2 = {
  width: 4,
  height: 3,
};

// 위와 같이 width 와 height 프로퍼티를 갖고 있는 객체들이 각자의 넓이를 출력할 때 사용할 수 있는 외부 함수를 만들고, 이를 사용하는 코드를 작성해보세요.

function printArea(){
  const area = this.width * this.height;
  console.log("Area : " +area)
  return area
}

// console.log(rectangle1.printArea())
// console.log(rectangle2.printArea())

// printArea.call(rectangle1)
// printArea.call(rectangle2)

rectangle2.printArea = printArea;
rectangle2.printArea();

// 문제 3

class Obj1 {
  constructor(name) {
    this.name = name;
    this.arrowFunc = () => this.name;
  }
  normFunc() {
    return this.name;
  }
}

class Obj2 {
  constructor(name) {
    this.name = name;
  }
}

const obj1 = new Obj1("Apple");
const obj2 = new Obj2("Banana");

obj2.arrowFunc = obj1.arrowFunc;
obj2.normFunc = obj1.normFunc;

console.log(obj2.arrowFunc(), obj2.normFunc());

//  어떤 값이 출력될까요?
// Apple Banana