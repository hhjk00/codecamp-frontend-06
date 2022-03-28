// 문자열 내 p와 y의 개수

function solution(s) {
  // 문자열 전체를 소문자로 변경 -> 소문자만 검증
  s = s.toLowerCase();
  // 문자열 전체를 대문자로 변경 -> 대문자만 검증
  s = s.toUpperCase();

  // p와 y의 갯수를 저장하는 변수
  let pp = 0;
  let yy = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] == "p" || s[i] == "P") {
      pp++;
    }
    if (s[i] == "y" || s[i] == "Y") {
      yy++;
    }
  }

  if (pp == yy) {
    return true;
  } else {
    return false;
  }
}

// 다른 풀이1
function solution(s) {
  // p와 y의 개수를 저장하는 객체
  const check = {};
  s.toLowerCase() // 1. 소문자로 변환
    .split("") // 2. 배열로 변환
    .forEach((str) => {
      // 3. 배열 메서드인 forEach 사용
      check[str] === undefined ? (check[str] = 1) : check[str]++;
    });
  return check.p === check.y;
}

// forEach는 undefined로 받아옴
// map과 forEach의 차이는 return의 차이

// 이상한 문자 만들기
function solution(s) {
  let answer = "";

  // 단어별로 인덱스를 구분하기 위한 변수
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      // 공백을 만났을 경우
      answer += s[i]; // " "
      idx = 0;
    } else {
      answer +=
        idx % 2 === 1
          ? s[i].toLowerCase() // 홀수일 때는 소문자 그대로 넣어준다.
          : s[i].toUpperCase(); // 짝수일 때는 대문자로 변환해서 넣어준다.
      idx++;
    }
  }
  return answer;
}

// 다른 풀이
function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
