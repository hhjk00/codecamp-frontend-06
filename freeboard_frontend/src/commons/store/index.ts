import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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
    address: "",
  },
});

export const mapLocationState = atom({
  key: "mapLocationState",
  default: {
    La: "",
    Ma: "",
  },
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const recentItemState = atom({
  key: "recentItemState",
  default: "",
});
