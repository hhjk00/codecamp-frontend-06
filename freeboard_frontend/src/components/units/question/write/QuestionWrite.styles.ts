import styled from "@emotion/styled";

export const CommentPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  font-family: "myFont";
  margin-bottom: 100px;
`;

export const Title = styled.div`
  padding-bottom: 40px;
  border-top: 1px solid #bdbdbd;
  padding-top: 40px;
`;

export const WriterPasswordInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 520px;
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

export const Rate = styled.input`
  padding-left: 15px;
  width: 100px;
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
  resize: none;
`;

export const SubmitButton = styled.div`
  width: 91px;
  height: 50px;
  text-align: center;
  padding: 14px;
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
