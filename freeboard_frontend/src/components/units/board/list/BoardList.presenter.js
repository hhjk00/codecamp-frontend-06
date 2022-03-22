import * as S from './BoardList.styles'

export default function BoardListUI(props) {

  return (

    <div>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.Column>{el.writer}</S.Column>
          <S.Column>{el.title}</S.Column>
          <S.Column>{el.contents}</S.Column>
          <S.Column>{el.createdAt}</S.Column>          
          
        </S.Row>
      ))}
    </div>
  );
}
