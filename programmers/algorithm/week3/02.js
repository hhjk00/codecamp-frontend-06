// 자연수 뒤집어 배열로 만들기

function solution(n) {
  let num = String(n);
  let answer = [];

  answer = num.split("").reverse().map(Number);

  return answer;
}

// 다른 풀이
function solution(n) {
  const answer = [];
  n = String(n);

  for (let i = n.length - 1; i >= 0; i++) {
    answer.push(Number(n[i]));
  }
}

// 다른 풀이

function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}

// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
  // 이 배열이 비어있다 검증할 때 length 사용
}

// 다른 풀이

function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
