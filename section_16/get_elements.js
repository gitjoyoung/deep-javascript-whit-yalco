// 요소 선택
// 🔗 Document 또는 🔗 Element의 인스턴스 메서드들. 자식 클래스들로 상속됨

// 1. getElementsByTagName - 태그명으로 선택
// document에서 사용시 문서 전체에서 선택
const $sections = document.getElementsByTagName('section');
const $listItems = document.getElementsByTagName('li');

console.log($sections);
console.log($listItems);
// 💡 반환값: 🔗 HTMLCollection - 유사 배열 객체 & 이터러블


// ⭐ 요소 노드에 사용시 그 하위에서 선택
// Element로부터 물려받은 메서드
// 이후의 메서드들에도 동일하게 적용됨
$sections[0].getElementsByTagName('li')

// getElementsByClassName - 클래스명으로 선택
// document에서 사용시 - Document의 메서드
const $plants = document.getElementsByClassName('plant');
const $soldOuts = document.getElementsByClassName('soldout');

console.log($plants);
console.log($soldOuts);
// 노드 요소에서 사용시 - Element의 메서드
console.log(
  $plants[0].getElementsByClassName('soldout')
);

// getElementById - 아이디로 선택
document.getElementById('sweets');