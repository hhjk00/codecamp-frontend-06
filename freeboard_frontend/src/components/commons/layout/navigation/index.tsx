import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";
import RecentItem from "../recentItem";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
  { name: "오늘의 메뉴", page: "/foodish" },
  // { name: "비회원 게시판", page: "/boardsNon" },
];

export default function LayoutNavigation() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-family: "myFont";
  `;

  const MenuWrapper = styled.div`
    display: flex;
    justify-content: row;
    justify-content: center;
    align-items: center;
    top: 105px;
    height: 63px;
    width: 1000px;
    background-color: white;
    position: absolute;
    border-radius: 10px;
  `;

  const MenuItem = styled.div`
    margin: 0px 60px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      color: #f2a405;
    }
  `;

  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <Wrapper>
      <MenuWrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <MenuItem id={el.page} onClick={onClickMenu}>
              {el.name}
            </MenuItem>
          </Fragment>
        ))}
      </MenuWrapper>
      <RecentItem />
    </Wrapper>
  );
}
