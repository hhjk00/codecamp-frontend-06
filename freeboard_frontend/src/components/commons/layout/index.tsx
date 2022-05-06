import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import RecentItem from "./recentItem";

const BodyWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* border-bottom: 1px solid; */
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const RECENT_ITEM = ["/markets", `/markets/${router.query.useditemId}`];
  const HIDDEN_LAYOUT = [
    "/",
    "/login",
    "/signUp",
    // ...
  ];
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  const recentItem = RECENT_ITEM.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout ? (
        <div>
          <LayoutBanner />
          <LayoutHeader />
          <LayoutNavigation></LayoutNavigation>
          <BodyWrapper>{props.children}</BodyWrapper>
          {/* <LayoutFooter /> */}
        </div>
      ) : (
        <div>
          <BodyWrapper>{props.children}</BodyWrapper>
        </div>
      )}

      {/* {recentItem && <RecentItem />} */}
    </>
  );
}
