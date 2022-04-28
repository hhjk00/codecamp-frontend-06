// 01. 다트 게임

const isBonus = ["S", "D", "T"]; // 보너스를 구분하기 위한 배열

function solution(dartResult) {
  const answer = [];

  let score = ""; // 점수만 뽑아서 저장

  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      // 숫자 타입으로 변환했을 때 데이터의 결과가 NaN 값이 아닌 경우 (= 숫자가 맞는 경우)
      score += dartResult[i];
    } else {
      // 숫자 타입으로 변환했을 때 데이터의 결과가 NaN 값인 경우 (= 숫자가 아닌 경우)
      if (isBonus.includes(dartResult[i])) {
        // 보너스인 경우 ("S", "D", "T")
        score = Number(score);

        if (dartResult[i] === "D") {
          // score = score ** 2 // 더블일 경우에는 2제곱
          score = Math.pow(score, 2);
        } else if (dartResult[i] === "T") {
          score = score ** 3; // 트리플일 경우에는 3제곱
        }
        answer.push(score);
        score = "";
      } else {
        // 옵션처리 ("*", "#")
        if (dartResult[i] === "#") {
          // 아차상일 경우: 해당 점수를 마이너스 한다.
          answer[answer.length - 1] *= -1;
        } else {
          // 스타상일 경우: 해당 점수를 2배로 만든다.
          answer[answer.length - 1] *= 2;

          if (answer.length > 1) {
            // 앞에 있는 점수까지 2배로 만든다.
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}

// 메서드 활용

// const isBonus = ["S", "D", "T"] // 보너스를 구분하기 위한 배열

function solution(dartResult) {
  let score = ""; // 문자열에 있는 점수 데이터를 저장
  let currentScore = 0; // 현재 게임(턴)의 점수를 저장
  let stop = false; // 점수를 최종 저장할 시점을 찾음

  return dartResult
    .split("")
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        score += cur;
        stop = false; // 새 게임이 시작된 경우 stop 초기화
      } else if (isBonus.includes(cur)) {
        // 보너스 처리
        score = Number(score);
        const squared = isBonus.indexOf(cur) + 1;

        currentScore = score ** squared;
        score = "";

        // 다음 데이터가 숫자인 경우(=옵션이 아닌 경우 : 현재 게임(턴)이 종료)
        if (isNaN(dartResult[i + 1]) === false || i + 1 === dartResult.length) {
          // 마지막 데이터 체크해서 게임을 무조건 종료
          stop = true;
        }
      } else {
        // 옵션처리
        stop = true;

        if (cur === "#") {
          // 아차상이라면
          currentScore *= -1;
        } else {
          // 스타상이라면
          currentScore *= 2;

          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        }
      }
      if (stop) {
        acc.push(currentScore);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur);
}
