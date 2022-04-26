import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const mapAddressState = atom({
  key: "mapState",
  default: {
    address: "인천광역시 서구",
  },
});

export const mapLocationState = atom({
  key: "mapLocationState",
  default: {
    La: "",
    Ma: "",
  },
});
