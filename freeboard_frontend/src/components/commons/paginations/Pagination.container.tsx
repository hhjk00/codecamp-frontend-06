import { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import { PaginationProps } from "./Pagination.types";

const Page = styled.span`
  color: ${(props) => (props.isActive ? "orange" : "black")};
  cursor: pointer;
`;

export default function Pagination(props: PaginationProps) {
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
    <div>
      <button onClick={onClickPrevPage} disabled={startPage === 1}>
        ＜
      </button>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Page
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              isActive={currentPage === index + startPage}
            >
              {` `} {index + startPage}
            </Page>
          )
      )}
      <button onClick={onClickNextPage} disabled={startPage + 10 > lastPage}>
        ＞
      </button>
    </div>
  );
}
