// 문자열을 정수로 바꾸기

function solution(s) {
  return Number(s);
}

// 같은 숫자는 싫어

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

//핸드폰 번호 가리기

function solution(phone_number) {
  let answer = "";

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      //뒷 4자리를 제외한 앞에 번호들을 가져온다.
      answer += "*";
    } else {
      answer += phone_number[i];
    }
  }
  return answer;
}

//다른 풀이
function solution(phone_number) {
  let answer = "";

  // 1. 뒷 4자리를 제외한 앞에 번호들은 *로 채워준다.
  answer = answer.padStart(phone_number.length - 4, "*");

  // 2. 뒷 4자리를 잘라서 문자열 뒤에 추가한다.
  // slice  1. 배열, 문자열에서 사용가능한 메서드
  //        2. 원본이 저장되지 않는다.
  answer += phone_number.slice(phone_number.length - 4);

  return answer;
}
