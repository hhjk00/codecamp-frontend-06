import styled from "@emotion/styled";
import { Carousel } from "antd";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    height: 300px;
    background-color: pink;
  `;

  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
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
