//23. 반복문 숫자더하기

function sum(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count = count + i;
  }
  return count;
}

// 24. 특정 문자열 세기

function countLetter(str) {
  let count = 0;
  //변수 count에 할당해야하므로 count 선언

  for (let i = 0; i < str.length - 1; i++) {
    //배열은 인덱스 값으로 접근 가능
    // i=0 => 0번째 인덱스 접근
    // 문자열의 마지막까지 가져와하므로 length사용
    // length값과 인덱스 값은 다르므로 꼭 length-1 하기
    if (str[i] === "a" || str[i] === "A") {
      count++;
    }
  }
  return count;
}

// 다른 방식으로 풀기

function countLetter(str) {
  let count = 0;
  //변수 count에 할당해야하므로 count 선언
  str = str.toLowerCase();
  // 모든 문자를 소문자로 변경하는 함수
  대문자 = toUpperCase;

  for (let i = 0; i < str.length - 1; i++) {
    //배열은 인덱스 값으로 접근 가능
    // i=0 => 0번째 인덱스 접근
    // 문자열의 마지막까지 가져와하므로 length사용
    // length값과 인덱스 값은 다르므로 꼭 length-1 하기

    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}

//25. 문자열 삽입

function makeNumber(num) {
  let answer = "";

  for (let i = 1; i <= num; i++) {
    answer += i;

    if (i !== num) {
      answer += "-";
    }
  }
  console.log(answer);
}

//26. 홀수 문자열

function makeOdd(num) {
  let answer = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      answer += i;
    }
  }
  return answer;
}

// 27. 가장 큰 수 찾기

function bigNum(str) {
  let biggest = Number(str[0]);

  for (let i = 1; i < str.length; i++) {
    // i = 1로 설정함으로써 불필요한 반복문이 줄어든다.
    // 맨 처음에 가장 큰 값이 나오게 되면 불필요한 반복문이 된다.
    // 한 바퀴를 더 돌고 와야 하므로
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }
  return biggest;
}
