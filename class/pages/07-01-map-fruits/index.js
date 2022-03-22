// 리렌더링 돼도 새로 안만들어짐
// state가 바뀌면 컴포넌트가 다시 그려지는데, state가 바뀐다고 이 값들까지 새로 바꿀 필요 없기 때문
    const FRUITS = [  // 고정된 값의 상수들에 대문자 사용
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스캣</div>
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];


export default function MapFruitsPage(){
    // const aaa =[ <div>1 레드향</div> , <div>2 샤인머스캣</div> , <div>3 산청딸기</div> ]
    // const bbb = ["나의레드향", "나의샤인머스캣", "나의산청딸기"].map((el) => (<div>{el}</div>))
    // const ccc = FRUITS.map((el) => (<div>{el.number} {el.title}</div>))

    return (
        <div>{FRUITS.map((el) => (
                <div>{el.number} {el.title}</div>
             ))}
             
             {/*  태그 안에 자바스크립트가 있을 때는 중괄호로 감싸주어야 한다. */}
             
        </div>
    )
}