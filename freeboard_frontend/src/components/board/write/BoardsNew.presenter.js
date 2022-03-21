import {NewPage,
    Wrapper,
    Title,
    WriterWrapper,
    Writer,
    Password,
    Label,
    InputWrapper,
    Subject,
    Contents,
    ZipcodeWrapper,
    Zipcode,
    SearchButton,
    Address,
    Youtube,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    SubmitButton,
    Error } from './BoardsNew.styles'

export default function BoardsNewUI(props) {

    return (
        <NewPage>
        <Wrapper>
          <Title>게시판 등록</Title>
          <WriterWrapper>
            <InputWrapper>
              <Label>작성자</Label>
              <Writer
                type="text"
                placeholder="이릉을 적어주세요."
                onChange={props.onChangeWriter}
              />
              <Error>{props.writerError}</Error>
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호</Label>
              <Password
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
              />
              <Error>{props.passwordError}</Error>
            </InputWrapper>
          </WriterWrapper>
          <InputWrapper>
            <Label>제목</Label>
            <Subject
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
            />
            <Error>{props.titleError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <Contents
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContents}
            />
            <Error>{props.contentsError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>주소</Label>
            <ZipcodeWrapper>
              <Zipcode placeholder="07250" />
              <SearchButton>우편번호 검색</SearchButton>
            </ZipcodeWrapper>
            <Address />
            <Address />
          </InputWrapper>
          <InputWrapper>
            <Label>유튜브</Label>
            <Youtube type="text" placeholder="링크를 복사해주세요." />
          </InputWrapper>
          <ImageWrapper>
            <Label>사진첨부</Label>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
          </ImageWrapper>
          <OptionWrapper>
            <Label>메인 설정</Label>
            <RadioButton type="radio" name="radio-button" />
            <RadioLabel>유튜브</RadioLabel>
            <RadioButton type="radio" name="radio-button" />
            <RadioLabel>사진</RadioLabel>
          </OptionWrapper>
          <ButtonWrapper>
            <SubmitButton onClick={props.onClickSubmit} isActive={props.isActive}>등록하기</SubmitButton>
          </ButtonWrapper>
        </Wrapper>
        </NewPage>
      );
    }
