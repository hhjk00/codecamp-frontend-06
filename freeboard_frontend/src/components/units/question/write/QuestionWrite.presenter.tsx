import * as S from "./QuestionWrite.styles";

export default function UsedItemQuestionWriteUI(props) {
  return (
    <S.CommentPage>
      <S.Wrapper>
        {!props.isEdit && <S.Title>문의하기</S.Title>}

        <S.ContentsInput>
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={
              props.isEdit ? props.el?.contents : props.contents || ""
            }
          />

          <S.ContentsBottom>
            <S.Text>
              {props.contents.length || props.el?.contents.length}/100
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
