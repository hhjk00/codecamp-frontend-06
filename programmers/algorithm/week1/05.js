// 1주차 금요일
//조건문: 점수에 따른 등급

function grade(score) {
    if(score <= 100 && score >= 90){
      return ("A")
    } else if(score <=89 && score >=80){
      return ("B")
    } else if(score <=79 && score >= 70){
      return ("C")
    } else if(score <=69 && score >= 60){
      return ("D")
    } else if(score <= 59 && score >=0){
      return ("F")
    } else {
      return ("잘못된 점수입니다")
    }
  }
  
  

  //반복문: 마이페이지

  
  const myShopping = [
		{ category: "과일", price: 12000　},
		{ category: "의류", price:10000　 },
		{ category: "의류", price: 20000　},
		{ category: "장난감", price: 9000 },
		{ category: "과일", price: 5000　 },
		{ category: "의류", price: 10000  },
		{ category: "과일", price: 8000　　},
		{ category: "의류", price: 7000　　},
		{ category: "장난감", price: 5000  },
		{ category: "의류", price: 10000　 },
]

function myPage(){
  let count = 0;
  let amount = 0;
  let grade = "";
  
  // for(let data of myShopping){
  //   console.log(data)
  }
  
  for(let i = 0; i <myShopping.length; i++) {
    if(myShopping[i].category === "의류") {
     	count++;
      amount += myShopping[i].price;
    }
  }
  	if( count >= 5 ) {
      grade = "Gold";
    } else if( count >= 3 ) {
      grade = "Silver";
    } else {
      grade = "Bronze"
    }
  
  // return ("의류를 구매한 횟수는 총 " + count + "회 금액은 " + amount + "원이며 등급은 " + grade + "입니다.")
  
  // return (`의류를 구매한 횟수는 총 ${count}회 금액은 ${amount} 등급은 ${grade}입니다.`)

