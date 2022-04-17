import styled from "@emotion/styled";
export default function LayoutHeader() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-family: "Noto Sans CJK KR";
  `;
  const TitleWrapper = styled.div`
    align-items: center;
    background-color: white;
    top: 45px;
    position: absolute;
    font-size: 18px;
  `;

  return (
    <Wrapper>
      <TitleWrapper></TitleWrapper>
    </Wrapper>
  );
}
