import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const [ deleteBoard ] = useMutation(DELETE_BOARD)

    const router = useRouter();
    console.log(router);


    const { data } = useQuery(FETCH_BOARD, {
      //요청이 날아감(비어있는 상태 undefined)
      variables: { boardId: router.query.boardId }, // 83013
    });

    const onClickDelete = async () => {
    try{
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      }) 

    router.push("/boards")

    } catch (error) {
      alert(error.message)
    }
  }

    return(
      <BoardsDetailUI
      data={data}
      onClickDelete={onClickDelete}

      />
    )
}