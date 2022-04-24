import { getDate } from "../../../../commons/libraries/utils";
import Pagination01 from "../../../commons/paginations/Pagination01.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import Searchbars01 from "../../../commons/searchbars/01/Searchbar01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.ListPage>
      <S.Wrapper>
        <S.PageTitle>
          <S.PageIcon></S.PageIcon>
          <S.PageText>자유게시판</S.PageText>
        </S.PageTitle>

        <S.SearchWrapper>
          <Searchbars01
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.SearchWrapper>

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
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((el: any) => (
                    <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                      {el}
                    </S.Word>
                  ))}
              </S.ColumnTitle>
              <S.ColumnWriter>{el.writer}</S.ColumnWriter>
              <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
            </S.TableBottom>
          ))}
        </S.TableWrapper>
        <S.BottomWrapper>
          <Pagination01
            refetch={props.refetch}
            dataBoardsCount={props.dataBoardsCount}
          />

          <S.BoardNew onClick={props.onClickMoveWrite}>글쓰기</S.BoardNew>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.ListPage>
  );
}
