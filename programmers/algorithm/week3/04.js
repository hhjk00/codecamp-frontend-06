// 두 개 뽑아서 더하기

function solution(numbers) {
  const answer = new Set();

  // 첫번째 반복문에서 가져오는 숫자는 첫번째 숫자로 기준을 잡는다.
  for (let i = 0; i < numbers.length; i++) {
    // 두번째 반복문에서는 두번째 숫자로 기준을 잡는다.
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      answer.add(sum);
    }
  }
  return [...answer].sort((a, b) => a - b);
  // return Array.from(answer).sort((a,b)=> a-b)
}

function solution(numbers) {
  const answer = new Set();

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;

      answer.add(sum);
    });
  });
  return [...answer].sort((a, b) => a - b);
}

// Set

// 1. 고유한 데이터만 받아올 수 있다. (중복되지 않는 데이터)
// 2. 겉은 배열 형태이지만, 타입은 객체형태

// new
// 1. 뒤에 들어오는 데이터를 새로운 객체 형태로 리턴

const arr = new Set();

// 데이터 추가
arr.add(1); // 1
arr.add(2); // 1, 2
arr.add(1); // 1, 2 (중복x)

// 데이터 반복
arr.forEach((el) => {
  console.log(el);
}); // 1, 2

// 데이터 조회
arr.has(1); // true
arr.has(2); // false

// 데이터 삭제
arr.delete(1); // 2
arr.delete(3);

// 데이터 초기화
arr.clear();

// set => 배열로 변환
arr.reduce((acc, cur) => {});
