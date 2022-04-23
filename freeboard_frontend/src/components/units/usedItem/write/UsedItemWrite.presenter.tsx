import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Input02 from "../../../commons/inputs/02";
import KakaoMap from "../../../commons/maps/01";
import Upload01 from "../../../commons/uploads/Upload01.container";
import * as S from "./UsedItemWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function UsedItemWriteUI(props) {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  return (
    <S.NewPage>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>상품명</S.Label>
              <Input02
                type="text"
                placeholder="상품명을 작성해주세요."
                register={{ ...props.register("name") }}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.InputWrapper>
          </S.WriterWrapper>

          <S.InputWrapper>
            <S.Label>한 줄 요약</S.Label>
            <Input02
              type="text"
              placeholder="상품을 한 줄로 표현해주세요."
              register={{ ...props.register("remarks") }}
            />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <ReactQuill
              onChange={props.onChangeContents}
              placeholder="상품을 설명해주세요."
              style={{ height: "300px", paddingBottom: "30px" }}
            />
            <S.Error>{props.contentsError}</S.Error>

            <S.InputWrapper>
              <S.Label>판매 가격</S.Label>
              <Input02
                type="number"
                placeholder="판매 가격을 입력해주세요."
                register={{ ...props.register("price") }}
              />
            </S.InputWrapper>
            <S.Error>{props.formState.errors.price?.message}</S.Error>

            <S.InputWrapper>
              <S.Label>태그 입력</S.Label>
              <Input02
                type="text"
                placeholder="#태그 #태그 #태그"
                register={{ ...props.register("tags") }}
              />
            </S.InputWrapper>
          </S.InputWrapper>

          <S.AddressWrapper>
            <S.InputWrapper>
              <S.Label>거래 위치</S.Label>
              <KakaoMap></KakaoMap>
            </S.InputWrapper>

            <S.AddressInputWrapper>
              <S.InputWrapper>
                <S.Label>GPS</S.Label>
                <S.LatButton>위도(LAT)</S.LatButton>
                <S.GpsIcon src="/images/location.png" />
                <S.LngButton>경도(LNG)</S.LngButton>
              </S.InputWrapper>

              <S.InputWrapper>
                <S.Label>주소</S.Label>
                <S.Address
                  type="text"
                  // register={{ ...props.register("address") }}
                />
                <S.AddressDetail
                  type="text"
                  // register={{ ...props.register("addressDetail") }}
                />
              </S.InputWrapper>
            </S.AddressInputWrapper>
          </S.AddressWrapper>

          <S.ImageWrapper>
            <S.Label>사진첨부</S.Label>
            {props.fileUrls.map((el, index) => (
              <Upload01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageWrapper>
          <S.OptionWrapper>
            <S.Label>메인 사진 설정</S.Label>
            <S.RadioButton type="radio" name="radio-button" />
            <S.RadioLabel>사진 1</S.RadioLabel>
            <S.RadioButton type="radio" name="radio-button" />
            <S.RadioLabel>사진 2</S.RadioLabel>
          </S.OptionWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton>등록하기</S.SubmitButton>
          </S.ButtonWrapper>
        </form>
      </S.Wrapper>
    </S.NewPage>
  );
}
