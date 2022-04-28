import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { withAuth } from "../../../commons/hocs/withAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import UsedItemDetailUI from "./UsedItemDetail.presenter";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./UsedItemDetail.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

function UsedItemDetail(props) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  // console.log(data);

  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(loggedIn);
  // console.log(userInfo);
  // console.log(getAccessToken);

  // 삭제
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      router.push("/markets");
      Modal.success({
        content: "게시물이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  // 찜하기
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  // 구매
  const onClickBuying = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "구매가 완료되었습니다." });
      router.push("/markets");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <UsedItemDetailUI
      data={data}
      onClickMoveToPage={onClickMoveToPage}
      isEdit={props.isEdit}
      loggedIn={loggedIn?.fetchUserLoggedIn}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBuying={onClickBuying}
    />
  );
}
export default withAuth(UsedItemDetail);
