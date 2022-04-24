import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요!"),
  remarks: yup.string().required("한 줄 요약을 입력해주세요!"),
  contents: yup.string().required("내용을 입력해주세요!"),
  price: yup.string().required("판매 가격을 입력해주세요!"),
});
