import styled from "@emotion/styled";

export const CommentPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans CJK KR";
  border-top: 1px solid #bdbdbd;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const WriterPasswordInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 480px;
  padding-bottom: 20px;
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 15px;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 15px;
`;

export const ContentsInput = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  height: 161px;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 15px;
  border: none;
`;

export const SubmitButton = styled.div`
  width: 91px;
  height: 50px;
  text-align: center;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const ContentsBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #bdbdbd;
`;
export const Text = styled.div`
  padding: 10px;
  color: #bdbdbd;
`;

export const CommentWrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-top: 30px;
`;

export const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const WriterRating = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Rating = styled.div`
  padding-left: 10px;
`;

export const CommentWriter = styled.div`
  font-weight: bold;
  padding-bottom: 5px;
  cursor: pointer;
`;

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
