// 문자열 내림차순으로 배치하기

//아스키코드
//1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.
//2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교

"a".charCodeAt(); // 97
"b".charCodeAt(); // 98
"z".charCodeAt(); // 122

//알파벳 소문자의 유니코드 97 ~ 122

"A".charCodeAt(); // 65
"Z".charCodeAt(); // 90

//알파벳 대문자의 유니코드 65 ~ 90

"A" > "a"; // false
"a" > "Z"; // true

// sort
//1. 배열에서만 사용이 가능하다.
//2. 문자열, 숫자를 내림차순 또는 오름차순을 할 수 있다.

arr = ["a", "b", "Z", "c"];
//내림차순 == ["c", "b", "a", "Z"]

arr.sort((a, b) => {
  return a > b ? -1 : 1; //내림차순
  // -1했을 때 a가 b보다 크니까 큰 값을 앞으로 보내게 된다.
  // 만약 작다면 1은 그자리에 있거나 뒤로 보내게 된다.
});

//문자열, 숫자 정렬에 작동한다. -> 안정적
// return a > b ? -1 : 1; // 내림차순
// return a > b ? 1 : -1; //오름차순

// //문자열 정렬에서 작동하지 않는다.
// return b - a; //내림차순
// return a - b; //오름차순

function solution(s) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    answer.push(s[i]);
  }

  answer.sort((a, b) => {
    return a > b ? -1 : 1;
  });

  let result = "";
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }
  return result;
}

//다른 풀이
function solution(s) {
  const answer = s
    .split("")
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join("");
  return answer;
}

//K번째 수

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    //array를 i번째부터 j번째까지 자른 결과를 저장
    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b; //오름차순
    });
    answer.push(result[k - 1]);
  }
  return answer;
}

function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b; //오름차순
    });
    return result[el[2] - 1];
  });
  return answer;
}
