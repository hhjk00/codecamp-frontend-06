import styled from "@emotion/styled";

export const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans CJK KR";
`;

export const Wrapper = styled.div`
  /* height: 1847px; */
  width: 1200px;
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
  font-family: "Noto Sans CJK KR";
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 15px;
`;

export const InfoRectangle = styled.div`
  width: 400px;
  height: 64px;
  background-color: gray;
  color: white;
  padding: 10px;
`;

export const InfoPolygon = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 10px solid gray;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  transform: rotate(-180deg);
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

export const Profile = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
`;

export const WriterDateWrapper = styled.div`
  width: 830px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export const WriteDate = styled.div``;

export const InfoWrapper = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Url = styled.div``;

export const Locate = styled.div``;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const Contents = styled.div`
  padding-top: 50px;
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

export const LikePic = styled.div`
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

export const DislikePic = styled.div`
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

`;

export const ListEdit = styled.div`
  display: flex;
  flex-direction: row;
  width: 580px;
  justify-content: space-between;
`;

export const List = styled.button`
  width: 179px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  font-family: "Noto Sans CJK KR";
  cursor: pointer;
`;
export const Edit = styled.button`
  width: 179px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  font-family: "Noto Sans CJK KR";
  cursor: pointer;
`;

export const Delete = styled.button`
  width: 179px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  font-family: "Noto Sans CJK KR";
  cursor: pointer;
`