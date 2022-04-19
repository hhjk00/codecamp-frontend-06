// 숫자 문자열과 영단어

// replace

// 1. 문자열 메서드
// 2. 첫번째 인자의 데이터를 두번째 인자의 데이터로 변경
// 3. 단일데이터 변경

// replaceAll

// 1. 모든 데이터 변경

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// replaceAll 활용
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    s = s.replaceAll(numbers[i], i);
  }
  return Number(s);
}

//
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(number[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

// 메서드 활용
function solution(s) {
  numbers.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}

// 정규표현식 활용
function solution(s) {
  // 정규표현식
  // /(슬래시) 열고 /(슬래시) 닫고 슬래시 안에 검증하는 문자열을 추가한다.
  // g 명령어는 전역 검색을 의미한다.

  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);

  return Number(s);
}

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
