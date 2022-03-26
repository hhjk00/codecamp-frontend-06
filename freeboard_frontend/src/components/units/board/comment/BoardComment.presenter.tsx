import { Fragment } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardComment.styles";
import { IBoardCommentUIProps } from "./BoardComment.types";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <div>
      <input type="text" onChange={props.onChangeWriter} placeholder="작성자" />
      <br />
      <div>{props.writerError}</div>
      <br />
      <input
        type="password"
        onChange={props.onChangePassword}
        placeholder="비밀번호"
      />
      <br />
      <div>{props.passwordError}</div>
      <input
        type="textarea"
        onChange={props.onChangeContents}
        placeholder="내용을 입력하세요."
      />
      <br />
      <div>{props.contentsError}</div>
      <button onClick={props.onClickSubmit}>등록하기</button>
      <br />
      {props.data?.fetchBoardComments.map((el: any) => (
        <Fragment key={el._id}>
          <div>{el.writer}</div>
          <br />
          <div>{el.contents}</div>
          <br />
          <div>{getDate(props.data?.fetchBoardComments?.createdAt)}</div>
          <button onClick={props.onClickUpdate}>수정하기</button>
        </Fragment>
      ))}
    </div>
  );
}
