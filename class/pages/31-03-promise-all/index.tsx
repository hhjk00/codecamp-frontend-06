export default function PromiseAllPage() {
  const onClickPromise = async () => {
    const result1 = await new Promise((resolve, reject) => {
      // Promise는 시간이 오래걸리는 작업이라 Queue로 빠진다.
      // Promise를 기다리는 게 await
      // Pomise는 resolve를 기다리고 있는 것

      // performance.now() // 시간을 체크하는 방법
      console.time("promise 시작"); // time과 timeEnd의 사이에 시간이 얼마나 경과했는지 보여줌
      setTimeout(() => {
        resolve("http://dog1.jpg"); // 성공
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("http://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("http://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("promise 시작"); // 이름이 같아야 한다.
  };

  const onClickPromiseAll = async () => {
    // 동시에 실행시키고 싶은 프로미스를 배열형태로 넣어줘

    // 1. 하나하나씩 확인하는 방법

    // console.time("promise.all 시작");

    // const result = await Promise.all([
    //   // 한 번만 기다린다! 시간이 짧은 애들은 받아와서 기다리고 있음 (최대 3초)
    //   // 전체가 실행되기 전까지는 아래로 내려가지 않는다

    //   new Promise((resolve, reject) => {
    //     // uploadFile이어도 되고 axios도 됨
    //     setTimeout(() => {
    //       resolve("http://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("http://dog2.jpg");
    //     }, 1000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("http://dog3.jpg");
    //     }, 2000);
    //   }),

    // 2. 한방에 확인하는 방법
    console.time("promise.all 시작");

    const result = await Promise.all(
      ["http://dog1.jpg", "http://dog2.jpg", "http://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("promise.all 시작");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </div>
  );
}
