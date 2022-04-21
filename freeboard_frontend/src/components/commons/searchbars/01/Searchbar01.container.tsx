import { ChangeEvent } from "react";
import _ from "lodash";
import * as S from "./Searchbar01.styles";

export default function Searchbar01(props) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return (
    <S.Searchbar>
      <S.SearchIcon></S.SearchIcon>
      <S.SearchbarInput
        placeholder="검색어를 입력해주세요."
        onChange={onChangeSearchbar}
      />
    </S.Searchbar>
  );
}
