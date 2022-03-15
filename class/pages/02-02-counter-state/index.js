import { useState } from 'react'
//useState는 react에서 제공하는 값이므로 불러와야함

export default function CounterStatePage(){
    const [ count, setCount ] = useState(0)

    function counter(){
        setCount(count + 1)
        //스코프 체인으로 인해 밖에있는 위에 count가져옴
    }

     return (
         <div>        
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
         </div>
         
     )
}