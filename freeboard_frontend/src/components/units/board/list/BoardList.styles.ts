import styled from "@emotion/styled";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans CJK KR";
`;

export const Wrapper = styled.div`
  width: 1200px;
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  padding-top: 100px;
`;

export const PageIcon = styled(SmsOutlinedIcon)`
  font-size: 35px;
`;

export const PageText = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 3px solid;
  border-top: 3px solid;
`;

export const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
`;

export const TableBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 13px;
  border-top: 1px solid #bdbdbd;
  font-size: 16px;
`;

export const ColumnHeaderNumber = styled.div`
  width: 10%;
`;
export const ColumnHeaderTitle = styled.div`
  width: 60%;
`;
export const ColumnHeaderWriter = styled.div`
  width: 15%;
`;
export const ColumnHeaderDate = styled.div`
  width: 15%;
`;

export const ColumnNumber = styled.span`
  width: 10%;
`;

export const ColumnTitle = styled.span`
  width: 60%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    color: orange;
  }
`;

export const ColumnWriter = styled.span`
  width: 15%;
`;

export const ColumnDate = styled.span`
  width: 15%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px;
  width: 95%;
`;

export const BoardNew = styled.div`
  width: 100px;
  height: 40px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  line-height: 35px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const Word = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
