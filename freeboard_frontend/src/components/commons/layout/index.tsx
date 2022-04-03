import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <LayoutBanner />
      <LayoutHeader />
      <LayoutNavigation></LayoutNavigation>
      <BodyWrapper>{props.children}</BodyWrapper>
      <LayoutFooter />
    </>
  );
}
