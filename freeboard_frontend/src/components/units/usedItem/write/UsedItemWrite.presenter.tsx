import Upload01 from "../../../commons/uploads/Upload01.container";
import * as S from "./UsedItemWrite.styles";
export default function UsedItemWriteUI() {
  return (
    <S.NewPage>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>상품명</S.Label>
            <S.Writer type="text" placeholder="상품명을 작성해주세요." />
            <S.Error></S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>

        <S.InputWrapper>
          <S.Label>한 줄 요약</S.Label>
          <S.Subject type="text" placeholder="상품을 한 줄로 표현한다면?" />
          <S.Error></S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents placeholder="내용을 작성해주세요." />
          <S.Error></S.Error>

          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <S.Price type="number" placeholder="판매 가격을 입력해주세요." />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>태그 입력</S.Label>
            <S.Tag type="text" placeholder="#태그 #태그 #태그" />
          </S.InputWrapper>
        </S.InputWrapper>

        <S.AddressWrapper>
          <S.InputWrapper>
            <S.Label>거래 위치</S.Label>
            <S.Map></S.Map>
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
              <S.Address />
              <S.Address />
            </S.InputWrapper>
          </S.AddressInputWrapper>
        </S.AddressWrapper>

        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <Upload01 />
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
      </S.Wrapper>
    </S.NewPage>
  );
}
