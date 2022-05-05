import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemAnswerListUI from "./AnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./AnswerList.queries";

export default function UsedItemAnswerList() {
  const router = useRouter();

  // 댓글 불러오기
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String() },
  });

  return <UsedItemAnswerListUI data={data} />;
}
