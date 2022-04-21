import styled from "@emotion/styled";

export const NewPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1000px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  font-family: "myFont";
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 796px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 796px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 796px;
  height: 320px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const Price = styled.input`
  width: 796px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Tag = styled.input`
  width: 796px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 358px;
`;

export const Map = styled.div`
  width: 384px;
  height: 252px;
  border: 1px solid #bdbdbd;
`;

export const LatButton = styled.button`
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;

  cursor: pointer;
`;

export const GpsIcon = styled.img`
  padding-left: 10px;
  padding-right: 10px;
`;

export const LngButton = styled.button`
  width: 108px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;

  cursor: pointer;
`;

export const Address = styled.input`
  width: 358px;
  height: 52px;
  margin-bottom: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const AddressDetail = styled.input`
  width: 358px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 796px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 796px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
