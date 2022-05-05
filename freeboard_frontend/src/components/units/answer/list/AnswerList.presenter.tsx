import UsedItemQuestionListItem from "./AnswerList.presenterItm";

export default function UsedItemAnswerListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <UsedItemQuestionListItem key={el._id} el={el} />
      ))}
    </>
  );
}
