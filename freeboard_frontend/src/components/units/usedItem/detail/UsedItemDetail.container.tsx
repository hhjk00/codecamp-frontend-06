import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import UsedItemDetailUI from "./UsedItemDetail.presenter";
import { FETCH_USED_ITEM } from "./UsedItemDetail.queries";

export default function UsedItemDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return <UsedItemDetailUI data={data} onClickMoveToPage={onClickMoveToPage} />;
}
