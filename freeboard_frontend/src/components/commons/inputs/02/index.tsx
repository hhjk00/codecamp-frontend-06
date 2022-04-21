import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  width: 796px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

interface IProps {
  type: "text" | "number";
  placeholder:
    | "상품명을 작성해주세요."
    | "상품을 한 줄로 표현한다면?"
    | "판매 가격을 입력해주세요."
    | "#태그 #태그 #태그";
  register: UseFormRegisterReturn;
}

export default function Input02(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
