import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props: IBoardCommentUIProps) {
  return (
    <S.CommentPage>
      <S.Wrapper>
        <S.Title>댓글</S.Title>
        <S.WriterPasswordInput>
          <S.Writer
            type="text"
            onChange={props.onChangeWriter}
            placeholder="작성자"
            value={props.writer}
          />
          <S.Password
            type="password"
            onChange={props.onChangePassword}
            placeholder="비밀번호"
            value={props.password}
          />

          <Rate onChange={props.handleChange} value={props.value} />
        </S.WriterPasswordInput>

        <S.ContentsInput>
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={props.contents}
          />

          <S.ContentsBottom>
            <S.Text> {props.contents.length}/100 </S.Text>
            <S.SubmitButton onClick={props.onClickSubmit}>
              등록하기
            </S.SubmitButton>
          </S.ContentsBottom>
        </S.ContentsInput>
      </S.Wrapper>
    </S.CommentPage>
  );
}
