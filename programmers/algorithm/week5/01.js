// 완주하지 못한 선수

arr.pop(); // 가장 뒤에있는 값 제거
arr.shift(); // 가장 앞에 있는 값 제거

splice;
// 1. 배열 메서드
// 2. 원하는 위치(인덱스)의 데이터를 제거하거나 추가할 수 있다.
// 3. 원본이 저장

const arr = [1, 2, 3, 4, 5];
arr.splice(1); // arr = [1] 첫번째 인덱스로부터 배열 끝까지 모든 데이터 제거
arr2 = arr.splice(); // 원본이 저장되기 때문에 다른 변수에 저장시켜 줄 필요가 없음

arr.splice; // (배열의 변경을 시작할 인덱스, 제거할 요소의 수, 배열에 추가할 요소)

// 효율성이 안좋은 코드
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}

// for문
function solution(participant, completion) {
  const answer = {};

  // 1. 참가한 선수의 이름과 참가자 수를 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }

  // 2. 완주한 명단에서 선수 이름을 제거
  for (let i = 0; i < completion.length; i++) {
    if (answer[completion[i]]) {
      answer[completion[i]]--;
    }
  }

  // 3. 완주하지 못한 선수의 이름을 리턴
  for (let key in answer) {
    // 객체를 반복
    if (answer[key] !== 0) {
      return key;
    }
  }
}

// sort
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1)); // 참가자 명단을 오름차순 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬
  // 문자열이기 때문에 그냥 sort 자체만 사용해도 OK
  // 숫자일 때만 오름차순을 명시해주어야 한다!

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// filter

function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1)); // 참가자 명단을 오름차순 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
