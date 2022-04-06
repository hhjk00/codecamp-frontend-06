// 01. 내적

// 내 풀이
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 메서드 풀이

function solution(a, b) {
  const answer = a.reduce((acc, cur) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}

// 02. 제일 적은 수 제거하기

function solution(arr) {
  const answer = [];

  // 1. 제일 작은 수를 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // 2. 제일 작은 수를 제거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  // 3. 빈 배열인지를 체크한다.
  // 빈 배열이라면 -1을 넣어서 리턴하고, 아니라면 배열 값 자체를 리턴
  return answer.length === 0 ? [-1] : answer;
}

// 리팩토링
function solution(arr) {
  // const answer = [];

  // 1. 제일 작은 수를 찾기
  const min = Math.min(...arr);
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   }
  // }

  // 2. 제일 작은 수를 제거
  const answer = arr.filter((num) => {
    return num !== min;
  });
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== min) {
  //     answer.push(arr[i]);
  //   }
  // }

  // 3. 빈 배열인지를 체크한다.
  // 빈 배열이라면 -1을 넣어서 리턴하고, 아니라면 배열 값 자체를 리턴
  return answer.length === 0 ? [-1] : answer;
}
