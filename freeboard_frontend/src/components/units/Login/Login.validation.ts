import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("필수 입력 사항입니다."),
  password: yup.string().required("필수 입력 사항입니다."),
});
