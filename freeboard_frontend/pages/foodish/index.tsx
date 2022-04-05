import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./index.styles";

export default function OpenapiWithUseEffectPage() {
  const [foodish, setFoodish] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://foodish-api.herokuapp.com/api/");
      setFoodish(result.data.image);
    };
    aaa();
  }, [click]);

  const onClickButton = () => {
    setClick((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.PageTitle>
        <S.PageIcon></S.PageIcon>
        <S.PageText>오늘의 메뉴</S.PageText>
      </S.PageTitle>
      <S.Img src={foodish}></S.Img>
      <S.Button onClick={onClickButton}>다른거</S.Button>
    </S.Wrapper>
  );
}
