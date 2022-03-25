import styled from "@emotion/styled";

export const ListPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 50px;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid;
  border-top: 1px solid;
`;

export const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const TableBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #bdbdbd;
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
`;

export const ColumnWriter = styled.span`
  width: 15%;
`;

export const ColumnDate = styled.span`
  width: 15%;
`;
