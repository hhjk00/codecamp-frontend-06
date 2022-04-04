import Router, { useRouter } from "next/router";
import { Component, createRef, useEffect, useRef, useState } from "react";

interface IState {
  count: number;
}

export default function CounterPage() {
  const router = useRouter();
  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>();

  const [count, setCount] = useState(99);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트 됨!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }

  // useEffect(() => {
  //   console.log("마운트 됨");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐!");
  // }

  useEffect(() => {
    console.log("수정되고 다시 그려짐!");
  }, [count]); // 맨 처음 한번은 먼저 실행된다

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!");
  //   // 채팅방 나가기
  //   // api 요청
  // // }

  // useEffect(() => {
  //   return() => {
  //     console.log("컴포넌트 사라짐!")
  //     }
  //   }, [])

  // 4. DidMount와 WillUnmount를 합치기
  useEffect(() => {
    console.log("마운트 됨");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2. 무한루프)
  // useEffect(()=> {
  //   setCount((prev) => prev + 1)
  // }, [count])

  const onClickCounter = () => {
    // console.log("카운터 클릭!!");
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게?");
  // 위에서 만들어만 지고 실행이 안되기 때문에 가장 먼저 실행됨

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
