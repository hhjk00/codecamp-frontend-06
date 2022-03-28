// 문자열 내 p와 y의 개수

function solution(s) {
  let pp = 0;
  let yy = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] == "p" || s[i] == "P") {
      pp += 1;
    }
    if (s[i] == "y" || s[i] == "Y") {
      yy += 1;
    }
  }

  if (pp == yy) {
    return true;
  } else if (ppp == 0 && yyy == 0) {
    return true;
  } else {
    return false;
  }
}

// 하샤드 수
