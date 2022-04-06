// 01. 음양 더하기
// 배열 두개의 길이가 같은 것을 이용

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// 삼항연산자 풀이

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    answer += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return answer;
}

// 메서드 풀이

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}

// 02. 하샤드 수
// 숫자타입을 문자타입으로 변경하고 두개의 값을 더해서 (문자열은 배열) 값을 저장하고
// 나눈 값의 나머지가 0이라면 true 아니면 false

// toString은 변수에 할당된 데이터만 문자열로 바꿔줄 수 있다!
// toString이 기존의 String과 또 다른 어떤 기능을 제공하는지? => MDN 참고

// 풀이 1
function solution(x) {
  let number = String(x);
  let result = 0;

  for (let i = 0; i < number.length; i++) {
    result += Number(number[i]);
  }
  if (x % result === 0) {
    return true;
  } else {
    return false;
  }
}

// 풀이 2
function solution(x) {
  let answer = 0;

  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  return x % answer === 0;
}

// 메서드 활용 풀이

function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    });
  return x % answer === 0;
}
