import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  padding-left: 10px;
  font-size: 16px;
`;

interface IProps {
  type: "text" | "password";
  placeholder: "Email" | "Password" | "UserName" | "Password Check";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
