import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 476px;
  height: 52px;
  border-radius: 15px;
  background-color: #f0f0f0;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  color: #bdbdbd;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
