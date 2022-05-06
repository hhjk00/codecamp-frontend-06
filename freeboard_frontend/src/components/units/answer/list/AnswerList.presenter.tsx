import UsedItemAnswerListItem from "./AnswerList.presenterItem";

export default function UsedItemAnswerListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((ele) => (
        <UsedItemAnswerListItem key={ele._id} ele={ele} el={props.el} />
      ))}
    </>
  );
}
