import styled from "@emotion/styled";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans CJK KR";
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  padding-top: 100px;
`;

export const PageIcon = styled(RestaurantMenuIcon)`
  font-size: 35px;
`;

export const PageText = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

export const Img = styled.img`
  width: 960px;
  height: 680px;
`;

export const Button = styled.button`
  margin: 30px;
`;
