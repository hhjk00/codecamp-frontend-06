// 01. 시저 암호
// 대소문자를 자르는 방식
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; // " "
    } else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25
          ? alphabet.substring(26) // 대문자에 해당하는 문자열을 잘라온다.
          : alphabet.substring(0, 26); // 소문자에 해당하는 문자열을 잘라온다.
      // 대문자 A부터 시작한다면?
      //subString() : 문자열을 잘라주는 메서드

      idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// 잘라진 형태에서 각각의 문자를 찾는 방식

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; // " "
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// 메서드 사용
// const lower = "abcdefghijklmnopqrstuvwxyz";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    // if (word[idx] === undefined) {}
    if (idx >= 26) {
      idx = 26;
    }
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
  return answer;
}

// s = "Z"
s.charCodAt(); // 90

// 대문자 : 65(A) ~ 90(Z)
// 소문자: 97(a)~

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let idx = s[i].charCodeAt() + n;
    if (idx > 122 || (idx > 90 && idx - n < 97)) {
      // 소문자 z(122)를 넘어가거나
      // 대문자 Z(90)을 넘어가면서 소문자 a(97)를 넘어가지 않을 때
      idx -= 26;
    }
    answer += String.fromCharCode(idx);
  }
  return answer;
}
