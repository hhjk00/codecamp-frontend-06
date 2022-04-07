export default function BoardNonUI(props: any) {
  return (
    <div>
      <div>
        작성자: <input type={"text"} onChange={props.onChangeWriter} />
      </div>
      <div>
        제목: <input type={"text"} onChange={props.onChangeTitle} />
      </div>
      <div>
        내용: <input type={"text"} onChange={props.onChangeContents} />
      </div>
      <button onClick={props.onClickSubmit}>등록하기</button>
    </div>
  );
}
