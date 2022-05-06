import * as S from "./AnswerWrite.styles";

export default function UsedItemAnswerWriteUI(props) {
  return (
    <S.CommentPage>
      <S.Wrapper>
        <S.ContentsInput>
          {props.isEdit ? (
            <S.Contents
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="답변을 등록해주세요."
              defaultValue={props.ele?.contents || ""}
            />
          ) : (
            <S.Contents
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="답변을 등록해주세요."
              value={props.contents}
            />
          )}

          <S.ContentsBottom>
            <S.Text>
              {props.contents.length || props.ele?.contents.length || 0}
              /100
            </S.Text>
            <S.SubmitButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
          </S.ContentsBottom>
        </S.ContentsInput>
      </S.Wrapper>
    </S.CommentPage>
  );
}
