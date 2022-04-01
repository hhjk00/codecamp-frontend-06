// 두 정수 사이의 합

// 풀이 1
function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return b;
  } else {
    // 최소 값 (반복문을 실행할 때 설정되는 초기값: a와 b중 작은 값이 들어옵니다.)
    const min = Math.min(a, b); // 작은 값 뽑아주는 메서드 // 혹은 a > b ? b : a

    // 최대값 (반복문이 종료되는 조건을 설정: a와 b중 큰 값이 들어옵니다.)
    const max = Math.max(a, b); // 큰 값 뽑아주는 메서드  // 혹은 a > b ? a : b

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

// 풀이 2
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min).fill(1).reduce((acc, cur, i) => {
    const num = min + cur + i;
    return acc + num;
  }, min);
  return answer;
}

// 정수 제곱근 판별

function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우
      answer = i + 1;
      return answer * answer;
    }
  }
  // 제곱근을 찾지 못한 경우
  return answer;
}

// 거듭제곱 연산자 Math.Pow(2, 2) = 2의 2제곱

// 풀이 1
function solution(n) {
  let answer = 1; // 최초식
  while (answer ** 2 < n) {
    // While문 : 내가 언제까지 실행할지 모를 때, 맞는 결과가 나올때까지 돌리고 싶을 때 사용
    // 조건식
    answer++; //증감식
  }
  return answer ** 2 === n ? (answer + 1) ** 2 : -1;
}

// 풀이 2
function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    // 제곱근이 맞는 경우 (=정수인 경우) true 반환
    // sqrt++
    return (sqrt + 1) ** 2;
  } else {
    // 제곱근이 아닌 경우 (=정수가 아닌 경우) false 반환
    return -1;
  }
}

Math.sqrt(num); // 제곱근 판별함수

// 정수 판별
Number.isInteger(1); // true
Number.isInteger(1.1); // false
// 정수가 맞다면 true, 아니라면 false

// 풀이 3
function solution(n) {
  return Number.isInteger(Math.sqrt(n) ? (Math.sqrt(n) + 1) ** 2 : -1);
}
