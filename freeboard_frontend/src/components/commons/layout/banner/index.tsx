import styled from "@emotion/styled";
import { Carousel } from "antd";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 532px;
    font-family: "myFont";
    border-bottom: 5px solid lightgray;
  `;

  const contentStyle = {
    width: "100%",
    height: "528px",
    lineHeight: "700px",
    textAlign: "center",
  };

  const Img = styled.img``;

  return (
    <Wrapper>
      <Carousel autoplay>
        <div>
          <Img src="/images/banner01.jpg" style={contentStyle} />
        </div>
        <div>
          <Img src="/images/banner02.jpg" style={contentStyle} />
        </div>
        <div>
          <Img src="/images/banner03.jpg" style={contentStyle} />
        </div>
      </Carousel>
    </Wrapper>
  );
}
