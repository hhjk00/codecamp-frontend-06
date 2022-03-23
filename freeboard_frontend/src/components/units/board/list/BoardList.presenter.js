import { getDate } from '../../../../commons/libraries/utils';
import * as S from './BoardList.styles'

export default function BoardListUI(props) {

  return (
    <S.Wrapper>
    <S.TableWrapper>
      <S.TableTop>
      <S.ColumnNumber>번호</S.ColumnNumber>
      <S.ColumnTitle>제목</S.ColumnTitle>
      <S.ColumnWriter>작성자</S.ColumnWriter>
      <S.ColumnDate>날짜</S.ColumnDate>
      </S.TableTop>

      {props.data?.fetchBoards.map((el, index) => ( 
        <S.Row key={el._id}>
          <S.ColumnNumber>{index + 1}</S.ColumnNumber>
          <S.ColumnTitle>{el.title}</S.ColumnTitle>
          <S.ColumnWriter>{el.writer}</S.ColumnWriter>
          <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>          
        </S.Row>
      )
      )}
      </S.TableWrapper>

      <button onClick={props.onClickMoveWrite}>게시물 등록하기</button>

      </S.Wrapper>
  );
}
