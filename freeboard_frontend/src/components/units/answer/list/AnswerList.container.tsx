import { useQuery } from "@apollo/client";
import UsedItemAnswerListUI from "./AnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./AnswerList.queries";

export default function UsedItemAnswerList(props) {
  // 댓글 불러오기
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.el?._id) },
  });

  return <UsedItemAnswerListUI data={data} el={props.el} />;
}
