import { getDate } from "../../../../commons/libraries/utils"
import { DetailPage, Wrapper, Info, InfoRectangle,
    InfoPolygon, HeaderWrapper, Profile,  WriterDateWrapper, Writer, WriteDate,
    InfoWrapper, Url, Locate, ContentsWrapper, Title,
    Contents, LikeWrapper, LikeDislike, Like, LikePic, LikeNum, DisLike,
    DislikePic, DislikeNum, MoveWrapper, ListEdit, List, Edit, Delete  } from "./BoardDetail.styles"

    export default function BoardDetailUI (props) {


    return (
        <DetailPage>
        <Wrapper>
          <Info>
            <InfoRectangle>
              <div>서울특별시 영등포구 양산로 200 </div>
              <div>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</div>
            </InfoRectangle>
            <InfoPolygon></InfoPolygon>
          </Info>
    
          <HeaderWrapper>
              <Profile><img src="/pic/profile.png"/></Profile>
              <WriterDateWrapper>
                <Writer>{props.data?.fetchBoard.writer}</Writer>
                <WriteDate>Date : {getDate(props.data?.fetchBoard.createdAt)}</WriteDate>
              </WriterDateWrapper>
              <InfoWrapper>
                <Url><img src="/pic/url.png"/></Url>
                <Locate><img src="/pic/location.png"/></Locate>
              </InfoWrapper>
          </HeaderWrapper>
    
          <ContentsWrapper>
            <Title>{props.data?.fetchBoard.title}</Title>
            <Contents>{props.data?.fetchBoard.contents}</Contents>
          </ContentsWrapper>
    
          <LikeWrapper>
            <LikeDislike>
            <Like>
              <LikePic><img src="/pic/like.png"/></LikePic>
              <LikeNum>1920</LikeNum>
            </Like>
            <DisLike>
              <DislikePic><img src="/pic/dislike.png"/></DislikePic>
              <DislikeNum>1920</DislikeNum>
            </DisLike>
            </LikeDislike>
          </LikeWrapper>
    
        </Wrapper>
        
        <MoveWrapper>
        <ListEdit>
        <List onClick={props.onClickMoveList}>목록으로</List>
        <Edit onClick={props.onClickMoveEdit}>수정하기</Edit>
        <Delete onClick={props.onClickDelete} >삭제하기</Delete>
        </ListEdit>
      </MoveWrapper>
    
        
      </DetailPage>
      );
    
    }