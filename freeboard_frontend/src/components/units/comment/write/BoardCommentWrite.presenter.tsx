import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.CommentPage>
      <S.Wrapper>
        {!props.isEdit && <S.Title>댓글</S.Title>}
        <S.WriterPasswordInput>
          {!props.isEdit ? (
            <S.Writer
              type="text"
              onChange={props.onChangeWriter}
              placeholder="작성자"
              value={props.writer}
            />
          ) : (
            <S.Writer
              type="text"
              onChange={props.onChangeWriter}
              placeholder="작성자"
              defaultValue={props.el?.writer || ""}
            />
          )}
          <S.Password
            type="password"
            onChange={props.onChangePassword}
            placeholder="비밀번호"
            value={props.password}
          />
          {!props.isEdit ? (
            <Rate onChange={props.onChangeRating} value={props.rating} />
          ) : (
            <Rate
              onChange={props.onChangeRating}
              defaultValue={props.el?.rating}
            />
          )}
        </S.WriterPasswordInput>

        <S.ContentsInput>
          {!props.isEdit ? (
            <S.Contents
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              value={props.contents || ""}
            />
          ) : (
            <S.Contents
              maxLength={100}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              defaultValue={props.el?.contents}
            />
          )}

          <S.ContentsBottom>
            <S.Text>
              {props.contents.length || props.el?.contents.length}/100{" "}
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
