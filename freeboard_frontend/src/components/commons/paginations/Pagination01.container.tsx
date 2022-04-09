import { MouseEvent, useState } from "react";
import * as S from "./Pagination01.styles";
import { Pagination01Props } from "./Pagination01.types";

export default function Pagination01(props: Pagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = props.dataBoardsCount
    ? Math.ceil(props.dataBoardsCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.target.id) }); // variables 객체 , page는 숫자이므로 Number로 감싸줌
    setCurrentPage(Number(event.target.id));
  };

  const onClickNextPage = (event) => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setCurrentPage(Number(event.target.id) + 10);
  };

  const onClickPrevPage = (event) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setCurrentPage(Number(event.target.id) - 10);
  };

  return (
    <S.Wrapper>
      <S.PrevButton onClick={onClickPrevPage} disabled={startPage === 1} />
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <S.Page
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              isActive={currentPage === index + startPage}
            >
              {index + startPage}
            </S.Page>
          )
      )}
      <S.NextButton
        onClick={onClickNextPage}
        disabled={startPage + 10 > lastPage}
      ></S.NextButton>
    </S.Wrapper>
  );
}
