import styled from "@emotion/styled";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const Page = styled.span`
  margin: 0px 10px;
  font-size: 18px;
  color: ${(props) => (props.isActive ? "orange" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  border-bottom: ${(props) => (props.isActive ? "1px solid orange" : "none")};
  cursor: pointer;
`;

export const PrevButton = styled(KeyboardDoubleArrowLeftIcon)`
  border: none;
  background-color: white;
  color: ${(props) => (props.disabled ? "lightgray" : "black")};
  cursor: ${(props) => (props.disabled ? "defalut" : "pointer")};
`;

export const NextButton = styled(KeyboardDoubleArrowRightIcon)`
  border: none;
  background-color: white;
  color: ${(props) => (props.disabled ? "lightgray" : "black")};
  cursor: ${(props) => (props.disabled ? "defalut" : "pointer")};
`;
