import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";

const NAVIGATION_MENUS = [
  { name: "게시판", page: "/boards" },
  { name: "마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
  { name: "오늘의 메뉴", page: "/foodish" },
];

export default function LayoutNavigation() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-family: "Noto Sans CJK KR";
  `;

  const MenuWrapper = styled.div`
    display: flex;
    justify-content: row;
    justify-content: center;
    align-items: center;
    top: 105px;
    height: 58px;
    width: 1200px;
    background-color: white;
    position: absolute;
  `;

  const MenuItem = styled.div`
    margin: 0px 60px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      color: orange;
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
    </Wrapper>
  );
}
