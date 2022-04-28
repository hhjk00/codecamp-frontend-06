import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Input02 from "../../../commons/inputs/02";
import Upload01 from "../../../commons/uploads/Upload01.container";
import * as S from "./UsedItemWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { mapLocationState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import KakaoMap01 from "../../../commons/maps/01";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function UsedItemWriteUI(props) {
  const [mapLocation] = useRecoilState(mapLocationState);
  // console.log(props.data?.fetchUseditem.useditemAddress?.addressDetail);
  return (
    <S.NewPage>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>
        <form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickSubmit)
          }
        >
          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>상품명</S.Label>
              <Input02
                type="text"
                register={{ ...props.register("name") }}
                defaultValue={props.data?.fetchUseditem.name}
                placeholder="상품명을 작성해주세요."
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
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <ReactQuill
              onChange={props.onChangeContents}
              placeholder="상품을 설명해주세요."
              style={{ height: "200px", paddingBottom: "40px" }}
              value={props.getValues("contents") || ""}
            />
          </S.InputWrapper>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>

          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <Input02
              type="number"
              placeholder="판매 가격을 입력해주세요."
              register={{ ...props.register("price") }}
              defaultValue={props.data?.fetchUseditem.price}
            />
          </S.InputWrapper>
          <S.Error>{props.formState.errors.price?.message}</S.Error>

          <S.InputWrapper>
            <S.Label>태그 입력</S.Label>
            <S.TagWrapper>
              {props.tags?.map((el, idx) => (
                <S.Tag key={idx}>{el}</S.Tag>
              ))}
            </S.TagWrapper>
            <S.TagInput
              type="text"
              placeholder="#태그 #태그 #태그"
              onKeyUp={props.onKeyUpTag}
              defaultValue={props.data?.fetchUseditem.tags || ""}
            />
          </S.InputWrapper>

          <S.AddressWrapper>
            <S.InputWrapper>
              <S.Label>거래 위치</S.Label>
              <KakaoMap01></KakaoMap01>
            </S.InputWrapper>

            <S.AddressInputWrapper>
              <S.InputWrapper>
                <S.Label>GPS</S.Label>
                <S.Lat
                  placeholder="위도(LAT)"
                  value={
                    mapLocation.La ||
                    props.data?.fetchUseditem.useditemAddress?.lat ||
                    ""
                  }
                />
                <S.GpsIcon src="/images/location.png" />
                <S.Lng
                  placeholder="경도(LNG)"
                  value={
                    mapLocation.Ma ||
                    props.data?.fetchUseditem.useditemAddress?.lng ||
                    ""
                  }
                />
              </S.InputWrapper>

              <S.InputWrapper>
                <S.Label>주소</S.Label>
                <S.Address
                  type="text"
                  onChange={props.onChangeAddress}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.address
                  }
                />
                <S.AddressDetail
                  type="text"
                  {...props.register("addressDetail")}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.addressDetail
                  }
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
            <S.SubmitButton>
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
          </S.ButtonWrapper>
        </form>
      </S.Wrapper>
    </S.NewPage>
  );
}
