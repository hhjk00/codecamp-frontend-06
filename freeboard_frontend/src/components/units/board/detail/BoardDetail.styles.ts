import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  /* height: 1847px; */
  width: 1000px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  font-family: "myFont";
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;

export const Profile = styled.img`
  display: flex;
  width: 46px;
  height: 46px;
`;

export const WriterDateWrapper = styled.div`
  width: 830px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 13px;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export const WriteDate = styled.div``;

export const InfoWrapper = styled.div`
  width: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Url = styled.img``;

export const Locate = styled.img``;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const Contents = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 20px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 1000px;
  max-height: auto;
`;

export const Youtube = styled(ReactPlayer)`
  margin: 10px auto auto auto;
`;

export const LikeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 100px;
`;

export const LikeDislike = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

export const Like = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LikePic = styled.img`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;

export const LikeNum = styled.div`
  color: #ffd600;
`;

export const DisLike = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DislikePic = styled.img`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;

export const DislikeNum = styled.div`
  color: #828282;
`;
export const MoveWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
`;

export const Move = styled.div`
  display: flex;
  flex-direction: row;
  width: 580px;
  justify-content: space-between;
`;

export const MoveButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  font-family: "Noto Sans CJK KR";
  cursor: pointer;
`;
