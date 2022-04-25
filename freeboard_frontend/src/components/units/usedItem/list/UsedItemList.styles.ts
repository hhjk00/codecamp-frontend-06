import styled from "@emotion/styled";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "myFont";
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 80px;
`;

export const PageIcon = styled(SmsOutlinedIcon)`
  font-size: 30px;
`;

export const PageText = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #bdbdbd;
  width: 1000px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
`;

export const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;

export const ItemBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const Name = styled.div`
  font-size: 24px;
  padding-bottom: 5px;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;
export const Remarks = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  padding-bottom: 5px;
`;
export const Tags = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;

export const SellerIcon = styled.div``;
export const SellerName = styled.div`
  font-size: 16px;
  padding-right: 20px;
`;
export const CountIcon = styled.div``;

export const Count = styled.div`
  font-size: 16px;
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 19%;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: right;
`;
