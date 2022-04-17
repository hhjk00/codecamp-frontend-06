import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const BodyWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* border-bottom: 1px solid; */
`;

const HIDDEN_LAYOUT = [
  "/",
  "/login",
  "/signUp",
  // ...
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout && (
        <div>
          <LayoutBanner />
          <LayoutHeader />
          <LayoutNavigation></LayoutNavigation>
          <BodyWrapper>{props.children}</BodyWrapper>
          {/* <LayoutFooter /> */}
        </div>
      )}

      {isHiddenLayout && (
        <div>
          <BodyWrapper>{props.children}</BodyWrapper>
        </div>
      )}
    </>
  );
}
