import {
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
  Error
} from '../../../styles/emotion'
import { useState } from 'react'

export default function BoardsNewPage(){
    const [writer, setWriter] = useState("")
    const [writerError, setWriterError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState("")

    const [contents, setContents] = useState("")
    const [contentsError, setContentsError] = useState("")


    const onChangeWriter = (event) => {
      setWriter(event.target.value)
      if (event.target.value !== "") {
        setWriterError("");
    }
  }

    const onChangePassword = (event) => {
      setPassword(event.target.value)
      if (event.target.value !== "") {
        setPasswordError("");
      }
    }

    const onChangeTitle = (event) => {
      setTitle(event.target.value)
      if (event.target.value !== "") {
        setTitleError("");
      }
    }

    const onChangeContents = (event) => {
      setContents(event.target.value)
      if (event.target.value !== "") {
        setContentsError("");
    }
  }



    const onClickSubmit = (event) => {
      if(writer === ""){
        setWriterError("작성자를 입력해주세요!")
      }
      if(password === ""){
        setPasswordError("비밀번호를 입력해주세요!")
      }
      if(title === ""){
        setTitleError("제목을 입력해주세요!")
      }
      if(contents === ""){
        setContentsError("내용을 입력해주세요!")
      }
      if(writer !== "" && password !== "" && title !== "" && contents !== "") {
        alert("게시물 등록에 성공하였습니다!")
      }

    }




  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이릉을 적어주세요." onChange={onChangeWriter}/>
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
        <Label>비밀번호</Label>
        <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}/>
        <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents type="text" placeholder="내용을 작성해주세요." onChange={onChangeContents}/>
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250"/>
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address/>
        <Address/>
        </InputWrapper> 
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube type="text" placeholder="링크를 복사해주세요."/>
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인 설정</Label>
          <RadioButton type="radio" name="radio-button"/>
          <RadioLabel>유튜브</RadioLabel>
          <RadioButton type="radio" name="radio-button"/>
          <RadioLabel>사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
        </ButtonWrapper>
    </Wrapper>
  )
}