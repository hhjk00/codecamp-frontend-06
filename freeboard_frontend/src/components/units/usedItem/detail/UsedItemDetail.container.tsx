import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USER_LOGGED_IN } from "../../login/Login.queries";
import UsedItemDetailUI from "./UsedItemDetail.presenter";
import { FETCH_USED_ITEM } from "./UsedItemDetail.queries";

function UsedItemDetail(props) {
  useAuth();

  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [userInfo] = useRecoilState(userInfoState);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(loggedIn);

  // console.log(getAccessToken);

  return (
    <UsedItemDetailUI
      data={data}
      onClickMoveToPage={onClickMoveToPage}
      isEdit={props.isEdit}
      userInfo={userInfo}
    />
  );
}
export default UsedItemDetail;
