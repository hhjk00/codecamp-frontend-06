// 짝수와 홀수

function solution(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 평균 구하기

function solution(arr) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  average = sum / arr.length;
  return average;
}

//reduce 메서드 사용하여 평균 구하기

function solution(arr) {
  const answer = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return answer / arr.length;
}

// 가운데 글자 가져오기

function solution(s) {
  // Math.floor = 내림처리(소수점을 제거)
  const center = Math.floor(s.length / 2);
  let answer = s[center];

  if (s.length % 2 == 0) {
    // 짝수 문자열일 경우에는 가운데 인덱스로부터
    // 앞에 있는 인덱스의 문자까지 추가해서 리턴한다.
    answer = s[center - 1] + answer;
  }
  return answer;
}

// 삼항연산자 사용해서 가운데 글자 가져오기

function solution(s) {
  // Math.floor = 내림처리(소수점을 제거)
  const center = Math.floor(s.length / 2);

  return s.length % 2 === 1
    ? s[center] // 홀수 문자열
    : s.slice(center - 1, center + 1); // 짝수 문자열
}
