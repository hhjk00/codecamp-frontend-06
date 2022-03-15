export default function CounterDocumentPage(){

    function counter(){
        let result = "반갑습니다"
        document.getElementById("count").innerText = result
    }

     return (
         <div>        
            <button id="count" onClick={counter}>안녕하세요</button>
         </div>
         
     )
}