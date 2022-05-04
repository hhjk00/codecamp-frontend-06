import UsedItemQuestionListItem from "./QuestionList.presenterItm";

export default function UsedItemQuestionListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <UsedItemQuestionListItem key={el._id} el={el} />
      ))}
    </>
  );
}
