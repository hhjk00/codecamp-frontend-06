import styled from "@emotion/styled";
import Slider from "react-slick";
import { HeartFilled } from "@ant-design/icons";

export const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  /* height: 1847px; */
  width: 1000px;
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
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
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 20px;
  color: black;
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
  padding: 30px 0px 30px 0px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 580px;
  justify-content: space-between;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: inline-block;
    width: 400px !important;
  }
  .slick-list {
    width: 400px;
    overflow-x: hidden;
  }

  .slick-dots.slick-thumb {
    width: 400px;
    padding: 0;
    text-align: center;
    margin: auto;

    li {
      position: relative;
      display: inline-block;
      &.slick-active {
        border: 1px solid #bdbdbd;
      }
    }
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  :hover {
    opacity: 70%;
  }
`;

export const NonPick = styled(HeartFilled)`
  font-size: 18px;
`;
