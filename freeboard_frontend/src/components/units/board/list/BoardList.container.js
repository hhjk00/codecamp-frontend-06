import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";


export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data)

  return( 
    <BoardListUI
        data={data}
    />
    
  )
} 