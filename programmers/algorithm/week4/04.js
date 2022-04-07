// 01. 2016년

// 1월 1일: 금요일
// 0+ 1월 1일 : 금요일
// 1+ 1월 2일 : 토요일
// 2+ 1월 3일 : 일요일
// 3+ 1월 4일 : 월요일
// 4+ 1월 5일 : 화요일
// 5+ 1월 6일 : 수요일
// 6+ 1월 7일 : 목요일
// 7+ 1월 8일 : 금요일
// 일주일을 기점으로 금요일로 돌아오고 일주일로부터 며칠이 지났는냐에 따라 요일을 구분

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = 0;

  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;

  return week[[answer % 7]];
}

// 메서드 풀이

function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // a월 이전일 때
          month[mn]
        : // a월 일 때
          b - 1)
    );
  }, 0);
  return week[answer % 7];
}

// Date() 현재 날짜 리턴

// date1 = Date()  'string'
// date2 = new Date() 'object' Month -1 해줘야함

date2.getFullYear();
date2.getMonth() + 1;
date2.getDate();

date2.getDay();
