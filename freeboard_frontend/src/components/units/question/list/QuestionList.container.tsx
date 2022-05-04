import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemQuestionListUI from "./QuestionList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./QuestionList.queries";

export default function UsedItemQuestionList() {
  const router = useRouter();

  // 댓글 불러오기
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return <UsedItemQuestionListUI data={data} />;
}
