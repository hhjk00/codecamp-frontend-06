import { Fragment } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./UsedItemList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function UsedItemListUI(props) {
  return (
    <S.ListPage>
      <S.Wrapper>
        <S.PageTitle>
          <S.PageIcon />
          <S.PageText>마켓</S.PageText>
        </S.PageTitle>

        <button onClick={props.onClickMoveToPage("/markets/new")}>
          상품 등록
        </button>
        <S.Scroll>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <S.ItemWrapper key={el._id}>
                <S.Image
                  id={el._id}
                  onClick={props.onClickMoveToDetail(el)}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />

                <S.ItemBody>
                  <S.ItemContents>
                    <S.Name id={el._id} onClick={props.onClickMoveToDetail(el)}>
                      {el.name}
                    </S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.Tags>{el.tags}</S.Tags>
                  </S.ItemContents>

                  <S.ItemBottom>
                    <S.SellerIcon />
                    <S.SellerName>{el.seller.name}</S.SellerName>
                    <S.CountIcon />
                    <S.Count>{el.pickedCount}</S.Count>
                  </S.ItemBottom>
                </S.ItemBody>

                <S.ItemPrice>
                  <S.Price>{el.price}원</S.Price>
                </S.ItemPrice>
              </S.ItemWrapper>
            ))}
          </InfiniteScroll>
        </S.Scroll>
      </S.Wrapper>
    </S.ListPage>
  );
}
