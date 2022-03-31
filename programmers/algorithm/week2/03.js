// 서울에서 김서방 찾기

// 내 코드
function solution(seoul) {
  let answer = 0;

  answer = seoul.indexOf("Kim");

  return "김서방은 " + answer + "에 있다";
}

//멘토님 코드
function solution(seoul) {
  let x = 0;

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      x = i;
      break;
    }
  }
  return `김서방은 ${x}에 있다`;
}

// 문자열 다루기 기본

//내 코드
function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

//멘토님 코드
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;
}

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s.split("").filter((num) => {
    // 데이터의 숫자가 아닌 문자일 경우만 남긴다.
    // isNaN의 결과가 true 값인 경우(NaN값인 경우)
    return isNaN(num) === true;
  });
}

//약수의 합

function solution(n) {
  let answer = 0;
  for (i = 0; i <= n; i++) {
    if (n % i == 0) {
      answer += i;
    }
  }
  return answer;
}

//멘토님 코드

function solution(n) {
  let answer = n;
  for (i = 0; i <= n / 2; i++) {
    if (n % i == 0) {
      answer += i;
    }
  }
  return answer;
}

function solution(n) {
  const answer = new Array(n)
    .fill(1) //배열이 1로 가득참
    .reduce((acc, cur, i) => {
      return n % (cur + i) === 0
        ? // 약수가 맞다면, 약수를 더한 값을 다음으로 넘겨주고
          acc + (cur + i)
        : // 약수가 아니라면, 더하지 않고 그냥 다음으로 넘겨준다.
          acc;
    }, 0);
}
