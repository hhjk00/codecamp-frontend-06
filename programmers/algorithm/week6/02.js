// 01. 체육복

function solution(n, lost, reserve) {
  const losted = [...lost]; // lost 데이터가 filter 되기 이전의 데이터를 저장한다.
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b); // 오름차순으로 정렬
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b); // 오름차순으로 정렬

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // 내 앞 번호의 학생이 여벌 체육복을 가지고 있는지를 검사
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;

      // 내 뒷 번호의 학생이 여벌 체육복을 가지고 있는지를 검사
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

// 메서드 사용

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);
  let answer = n - lost.length;

  return lost.reduce((acc, cur) => {
    // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
    const prev = reserve.indexOf(cur - 1);
    // 뒤에 있는 학생이 여벌 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);

    if (prev !== -1) {
      // 앞에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      // 뒤에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, answer);
}
