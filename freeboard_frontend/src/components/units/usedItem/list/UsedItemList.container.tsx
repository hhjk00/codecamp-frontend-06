import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import UsedItemListUI from "./UsedItemList.presenter";
import { FETCH_USED_ITEMS } from "./UsedItemList.queries";

export default function UsedItemList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/markets/${event.target.id}`);
  };

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
    />
  );
}
