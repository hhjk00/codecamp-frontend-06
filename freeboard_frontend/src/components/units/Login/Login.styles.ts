import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    160.18deg,
    #03001e 0.47%,
    #7303c0 50.52%,
    #ec38bc 102.52%
  );

  font-family: "myFont";
  height: 100vh;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 230px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  color: white;
`;

export const Icon = styled(UserOutlined)`
  font-size: 30px;
`;

export const TiTle = styled.div`
  color: white;
  font-size: 25px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 190px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid white;
`;

// export const Input = styled.input`
//   border: none;
//   border-radius: 5px;
//   width: 100%;
//   padding: 10px;
//   padding-left: 10px;
//   font-size: 16px;
// `;

export const Button = styled.button`
  border: none;
  background-color: #f2a405;
  width: 100%;
  border-radius: 5px;
  padding: 6px;
  font-size: 19px;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid white;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  font-size: 18px;
`;

export const Text = styled.div`
  color: white;
`;
export const SignUp = styled.button`
  color: #f2a405;
  border: none;
  background-color: transparent;
  cursor: pointer;
  line-height: 1;
`;
