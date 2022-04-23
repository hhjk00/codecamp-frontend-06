import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import UsedItemDetailUI from "./UsedItemDetail.presenter";
import { FETCH_USED_ITEM } from "./UsedItemDetail.queries";

export default function UsedItemDetail() {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return <UsedItemDetailUI data={data} userInfo={userInfo} />;
}
