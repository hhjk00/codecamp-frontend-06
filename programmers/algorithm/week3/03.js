// 콜라츠 추측

// 풀이 1

function solution(num) {
  // 1이 될 때까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break;
    }

    answer++;

    // num이 짝수일 때 : 해당 수에 2를 곱한다.
    if (num % 2 === 0) {
      num /= 2; // num = num / 2
    } else {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : answer;
}

// 풀이2

function solution(num) {
  let answer = 0;

  // 조건식이 true일 때만 반복 로직이 실행
  while (num !== 1) {
    if (answer >= 500) {
      // 500번 이상 실행했다면,
      return -1;
    }

    answer++;
    num =
      num % 2 === 0
        ? num / 2 // 짝수일 경우
        : num * 3 + 1; //홀수일 경우
  }
  return answer;
}

//풀이3

function solution(num) {
  let answer = 0;

  const result = new Array(500).fill(1).reduce((acc, cur) => {
    if (acc !== 1) {
      answer++;
      return acc % 2 === 0
        ? acc / 2 // 짝수일 때
        : acc * 3 + 1;
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}
