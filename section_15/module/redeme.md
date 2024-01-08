페이지에 자바스크립트 파일 여럿을 로드할 때 문제점들
1. 네임스페이스 문제
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>
  <script defer src="./script1.js"></script>
  <script defer src="./script2.js"></script>
</head>
<body>
</body>
</html>

script1.js
const x = 1;

console.log(x);

script2.js
const x = 2;

console.log(x);

같은 상수나 변수명이 둘 이상의 파일에서 사용되었으므로 오류 발생
다른 파일에 상수/변수명이나 함수명이 중복 사용되지 않았는지 확인해야 함
규모가 큰 웹페이지를 분업하여 만들 때 특히 큰 어려움