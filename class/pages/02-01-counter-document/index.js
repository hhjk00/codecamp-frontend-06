export default function CounterDocumentPage(){
    //페이지 컴포넌트

    function counter(){
        const result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    }

     return (
         <div>        
            <div id="count">0</div>
            <button onClick={counter}>카운트 올리기!!!</button>
         </div>
         
         //return 안 값은 반드시 묶어서 내보내야 함
         // <>  </> 를 사용해서도 적용 가능
     )
}