import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans CJK KR";
  margin-bottom: 30px;
`;

export const CommentWrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
`;

export const WriterRating = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentWriter = styled.div`
  font-weight: bold;
  cursor: pointer;
  line-height: 36px;
  padding-right: 15px;
`;

export const Rating = styled(Rate)``;

export const CommentContents = styled.div``;

export const CommentDate = styled.div`
  color: #bdbdbd;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const UpdateButton = styled.div`
  cursor: pointer;
`;
export const DeleteButton = styled.div`
  cursor: pointer;
`;

export const CommentBottom = styled.div``;
