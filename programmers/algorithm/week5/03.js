// 01. 폰켓몬

function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (answer.length < nums.length / 2 && answer.includes(nums[i]) === false) {
      // 몇마리까지 넣을건지, 중복체크
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// Set
function solution(nums) {
  const answer = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (answer.size < nums.length / 2) {
      // 몇마리까지 넣을건지, 중복체크
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

// 메서드
function solution(nums) {
  const answer = new Set([]);

  nums.forEach((monster) => {
    if (answer.size < nums.length / 2) {
      answer.add(monster);
    }
  });
  return answer.size;
}

function solution(nums) {
  // 내가 최대한 가져갈 수 있는 폰켓몬 종류의 수
  const answer = new Set(nums).size;
  // 내가 최대한 가져갈 수 있는 폰켓몬의 수
  const limit = nums.length / 2;

  if (limit >= answer) {
    return answer;
  }
  return limit;
}
