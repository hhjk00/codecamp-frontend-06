// 자릿수 더하기

function solution(n){

    let answer = 0;
    //인덱스 값으로 접근하기 위해 문자열 타입으로 변환
    n = String(n)
    
    for ( let i = 0; i < n.length; i++) {
        answer += Number(n[i])
    }

    return answer;
}

// 다른 풀이

function solution(n) {
    const answer = n.toString()
                    .split("")
                    .reduce( (acc, cur) => {
                          return acc + Number(cur)
                    }, 0)
    return answer
}

// x만큼의 간격이 있는 n개의 숫자

function solution(x, n) {
    const answer= []
    
    for( let i = 1; i <= n; i ++) {
        answer.push( i * x)
    }
    return answer
}

// 다른 풀이

function solution (x, n) {
    const answer = new Array(n)
                    .fill(1)
                    .map( (num, i) => {
                        return (num + i) * x
                    })
    return answer
}