import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./Userpage.queries";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function UserPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangeValue = (event) => {
    setAmount(event.target.value);
  };

  const onClickRequestPay = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복되지 않도록 해야함! 주석으로 하면 자동발급
        name: "포인트 충전",
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-0000-0000",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,

          // 백엔드에 결제관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading
          try {
            createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
              refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
            });

            // console.log(rsp);
            Modal.success({ content: "포인트가 충전되었습니다." });
          } catch (error) {
            if (error instanceof Error)
              Modal.error({
                content: error.message,
              });
          }
        } else {
          // 결제 실패 시 로직,
          alert("충전에 실패했습니다! 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select id="leaveCode" name="leaveCode" onChange={onChangeValue}>
        <option disabled selected>
          가격을 선택해주세요.
        </option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={onClickRequestPay}>충전하기</button>
      {data?.fetchUserLoggedIn.userPoint.amount}
    </div>
  );
}
