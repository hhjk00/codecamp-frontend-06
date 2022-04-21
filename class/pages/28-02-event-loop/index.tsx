// 싸이월드 때
// setTimeout(() => {
//   console.log("안녕하세요!")
// }, 1000)
// setInterval(() => {
//   document.getElementById("timer")?.innerText = "59:30"
// },1000)

export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("=======시작!========");

    setTimeout(() => {
      console.log("0초 뒤에 실행 될 거예요!");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000000; i += 1) {
      sum = sum + 1;
    }

    console.log("==========끝========");
  };
  return <button onClick={onClickTimer}>setTimeout 실행시키기</button>;
}
