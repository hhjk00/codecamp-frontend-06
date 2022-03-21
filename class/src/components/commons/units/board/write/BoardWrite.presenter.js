import { SubmitButton, WriterInput } from './BoardWrite.styles'
    // 각각 따로 받을 때는 중괄호를 씀
    // export가 여러개이므로 각각 써주어야 한다
    // export default는 한개만 있어야하지만 export는 여러개 있을 수 있고 함께 쓰일 수 있다
    // export default만 있으면 괄호 필요 없이 쓸 수 있다
    // import SubmitButton { WriterInput } from ..

export default function BoardWriteUI(props) {

    return (
        <div>
        {/* <div>{data}</div> */}
        작성자: <WriterInput type="text" onChange={props.onChangeWriter} /> <br />
        제목: <input type="text" onChange={props.onChangeTitle} /> <br />
        내용: <input type="text" onChange={props.onChangeContents} /> <br />
        <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>Graphql-API 요청하기!!!</SubmitButton>
      </div>
    )

}