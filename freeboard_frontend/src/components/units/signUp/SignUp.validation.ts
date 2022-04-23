import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  email: yup
    .string()
    .required("필수 입력 사항입니다.")
    .email("이메일 형식이 적합하지 않습니다.")
    .matches(/^\w+@\w+\.\w+$/, "이메일 형식에 맞지 않습니다."),
  password: yup
    .string()
    .required("필수 입력 사항입니다.")
    .max(15, "최대 15자리로 입력해주세요.")
    .matches(
      /(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{4,50}$/,
      "숫자, 특문, 영어 포함 4자 이상"
    ),

  passwordMore: yup.string().required("필수 입력 사항입니다."),
});
