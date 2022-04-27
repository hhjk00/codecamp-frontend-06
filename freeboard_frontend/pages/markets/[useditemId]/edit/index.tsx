import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemWrite from "../../../../src/components/units/usedItem/write/UsedItemWrite.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        _id
        name
        email
      }
      soldAt
      createdAt
    }
  }
`;
export default function MarketDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  return <UsedItemWrite isEdit={true} data={data} />;
}
