import { kMaxLength } from "buffer";
import { Fragment } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentUI(props: any) {
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
          <S.Rating>★★★★★</S.Rating>
        </S.WriterPasswordInput>

        <S.ContentsInput>
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={props.contents}
          />

          <S.ContentsBottom>
            <S.Text> 0/100 </S.Text>
            <S.SubmitButton onClick={props.onClickSubmit}>
              등록하기
            </S.SubmitButton>
          </S.ContentsBottom>
        </S.ContentsInput>

        {props.data?.fetchBoardComments.map((el: any) => (
          <Fragment key={el._id}>
            <S.CommentWrapper id={el.writer} onClick={props.onClickWriter}>
              <S.CommentTop>
                <S.CommentProfile src="/images/profile.png" />
                <S.CommentInputWrapper>
                  <S.WriterRating>
                    <S.CommentWriter>{el.writer}</S.CommentWriter>
                    <S.Rating>★★★★★</S.Rating>
                  </S.WriterRating>
                  <S.CommentContents>{el.contents}</S.CommentContents>
                  <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
                </S.CommentInputWrapper>
                <S.UpdateButton>수정하기</S.UpdateButton>
                <S.DeleteButton>삭제하기</S.DeleteButton>
              </S.CommentTop>
              <S.CommentBottom></S.CommentBottom>
            </S.CommentWrapper>
          </Fragment>
        ))}
      </S.Wrapper>
    </S.CommentPage>
  );
}
