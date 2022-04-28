import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import UsedItemListUI from "./UsedItemList.presenter";
import { FETCH_USED_ITEMS } from "./UsedItemList.queries";

export default function UsedItemList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { onClickMoveToPage } = useMoveToPage();
  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/markets/${event.target.id}`);
  };

  // 스크롤
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <UsedItemListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      onLoadMore={onLoadMore}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
