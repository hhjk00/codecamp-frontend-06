// 01. 피보나치 수

// 0, 1, 1, 2, 3, 5 ...

function solution(n) {
  // 피보나치 수열들을 저장하는 배열
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}

// number === Int

1111111111111111111111111111111; // 1.111111111111111e+30

// 2의 53제곱 1을 뺀 값
a = 2 ** 53 - 1; // 9007199254740991

// 정상적인 범위를 알려주는 메서드
Number.Max_SAFE_INTEGER;

// int범위 안에 있는 것을 알려주는 메서드
Number.isSafeInteger(a + 1); // false

// 메서드 활용 풀이

function solution(n) {
  let prev = 0; // 0번째 피보나치 수의 결과
  let next = 1; // 1번째 피보나치 수의 결과
  let sum = prev + next; // 2번째 피보나치 수의 결과

  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;
    return sum;
  }, sum);
  return answer;
}
