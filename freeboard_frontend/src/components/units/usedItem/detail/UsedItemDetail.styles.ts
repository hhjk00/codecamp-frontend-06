import styled from "@emotion/styled";
import Slider from "react-slick";

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
  font-weight: 600;
  font-size: 20px;
`;

export const WriteDate = styled.div`
  color: #828282;
`;

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
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const Remarks = styled.div`
  font-size: 18px;
  color: #bdbdbd;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

export const Contents = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
`;

export const Tag = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  max-width: 1000px;
  max-height: auto;
`;

export const MapWrapper = styled.div`
  width: 100%;
  padding: 30px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  font-family: "Noto Sans CJK KR";
  cursor: pointer;
`;

export const StyledSlider = styled(Slider)`
  height: 90%; //슬라이드 컨테이너 영역

  .slick-list {
    //슬라이드 스크린
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    background: green;
  }

  .slick-slide div {
    //슬라이더  컨텐츠
    /* cursor: pointer; */
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track {
    //이건 잘 모르겠음
    width: 100%;
  }
`;
