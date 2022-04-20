// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

export default function WebEditorPage() {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const onChangeContents = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
