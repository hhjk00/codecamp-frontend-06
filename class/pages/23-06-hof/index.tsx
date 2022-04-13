export default function HofPage() {
  const onClickChild = (el) => (event) => {
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <button key={el} onClick={onClickChild(el)}>
          {el}
        </button>
      ))}
    </div>
  );
}
