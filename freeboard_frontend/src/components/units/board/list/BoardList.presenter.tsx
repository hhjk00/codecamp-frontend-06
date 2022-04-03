import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/paginations/Pagination.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.ListPage>
      <S.Wrapper>
        <S.TableWrapper>
          <S.TableTop>
            <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
            <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
            <S.ColumnHeaderWriter>작성자</S.ColumnHeaderWriter>
            <S.ColumnHeaderDate>날짜</S.ColumnHeaderDate>
          </S.TableTop>

          {props.data?.fetchBoards.map((el: any, index: number) => (
            <S.TableBottom key={el._id}>
              <S.ColumnNumber>{10 - index}</S.ColumnNumber>
              <S.ColumnTitle id={el._id} onClick={props.onClickMoveBoardDetail}>
                {el.title}
              </S.ColumnTitle>
              <S.ColumnWriter>{el.writer}</S.ColumnWriter>
              <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
            </S.TableBottom>
          ))}
        </S.TableWrapper>

        <S.BottomWrapper>
          <Pagination
            refetch={props.refetch}
            dataBoardsCount={props.dataBoardsCount}
          />
          <S.BoardNew onClick={props.onClickMoveWrite}>글쓰기</S.BoardNew>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.ListPage>
  );
}
