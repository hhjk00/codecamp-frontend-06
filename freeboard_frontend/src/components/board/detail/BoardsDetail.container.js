import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsDetailUI from "./BoardsDetail.presenter";
import { FETCH_BOARD } from "./BoardsDetail.queries";

export default function BoardsDetail() {

    const router = useRouter();
    console.log(router);
  
    const { data } = useQuery(FETCH_BOARD, {
      //요청이 날아감(비어있는 상태 undefined)
      variables: { boardId: router.query.boardId }, // 83013
    });
  
    console.log(data);

    return(
      <BoardsDetailUI
      data={data}

      />
    )
}