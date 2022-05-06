import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("Writer")} /> <br />
      제목: <input type="text" {...register("Title")} /> <br />
      내용: <input type="text" {...register("Contents")} />
      {/*       내용: <input type="text" {...register("boardAddress.addressDetail")} />
       */}
      <br />
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
