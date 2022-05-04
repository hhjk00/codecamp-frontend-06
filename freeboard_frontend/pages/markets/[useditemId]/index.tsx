import UsedItemQuestionList from "../../../src/components/units/question/list/QuestionList.container";
import UsedItemQuestionWrite from "../../../src/components/units/question/write/QuestionWrite.container";
import UsedItemDetail from "../../../src/components/units/usedItem/detail/UsedItemDetail.container";

export default function MarketsDetailPage() {
  return (
    <>
      <UsedItemDetail />
      <UsedItemQuestionWrite />
      <UsedItemQuestionList />
    </>
  );
}
