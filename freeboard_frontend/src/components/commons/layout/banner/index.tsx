import styled from "@emotion/styled";
import { Carousel } from "antd";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 600px;
    font-family: "Noto Sans CJK KR";
  `;

  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "700px",
    textAlign: "center",
    background: "pink",
  };

  return (
    <Wrapper>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Wrapper>
  );
}
