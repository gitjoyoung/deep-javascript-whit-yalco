// querySelector, querySelectorAll
// 주어진 CSS 선택자 첫 번째 또는 모든 요소 반환
// Document와 Element 모두 갖고 있음

document.querySelector('section');
// 💡 NodeList 반환 (HTMLCollection보다 다양한 타입 담음)
document.querySelectorAll('section');
document.querySelector('.plant > ul > .soldout');
document.querySelector('#sweets ul > :nth-child(2)');
$sections[2].querySelectorAll('.soldout');

// 노드 기준 탐색
// 1. 자식 노드 탐색
document.querySelector('section')
.children;
// Element의 기능 - 하위 요소 노드만 반환


document.querySelector('section')
.childNodes;

// 🔗 Node의 기능 - 텍스트 노드를 포함한 하위 노드 반환
// 공백도 텍스트 노드에 포함됨

// ⭐ 메서드 체이닝
document.querySelector('section')
.querySelector('li')
.children;

document.querySelector('section')
.querySelector('li')
.childNodes;

const $firstUl = document.querySelector('ul')

// . 형제, 부모 노드 탐색
const $secondLi = document
.querySelector('section')
.querySelector('li:nth-child(2)');