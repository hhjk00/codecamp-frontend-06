// 최대공약수와 최소공배수

function solution(n, m) {
  const answer = [];

  // 최대공약수 : 두개의 수의 약수 중에서 (공통되는) 제일 큰 수
  // 최소공배수 : 두개의 수의 배수 중에서 (공통되는) 가장 작은 수
  const biggest = Math.max(n, m);

  // 최대공약수 구하기
  // Math.max값을 구하고 나눠서 for문을 돌려서 증가한 i의 최대 값이 0으로 나누어질 때 max에 i를 넣어준다.
  let max = 0;
  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  // 최소공배수 구하기
  let min = 0;
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}

// 최대공약수를 구할 수 있는 공식

function solution(n, m) {
  // 유클리드 호제법
  // -최대공약수를 구하기 위한 알고리즘 (공식)

  // a를 b로 나눴을 때 (a가 b보다 클 경우) = 큰 수에서 작은 수를 나눴을 때
  // 나머지 값이 0이 되면, 작은 수 (b)가 최대공약수가 된다.
  // 나머지 값이 0이 되지 않으면, 작은 수(b)가 큰 수(a)가 되고,
  // 나머지 값이 작은 수(b)가 된다.
  // 위의 방식을 반복했을 때 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.

  let a = Math.max(n, m); // 큰 수
  let b = Math.min(n, m); // 작은 수
  let r = 0; // 나머지 값

  while (a % b > 0) {
    r = a % b; // 나머지 값 저장
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에 나머지 값 할당
  }

  // 최소공배수는 두 수(n, m) 곱한 값에 최대공약수를 나눈 값
  return [b, (n * m) / b];
}
