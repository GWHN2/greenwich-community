import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserRule, EditingItem, SessionData } from "../type";

const { persistAtom } = recoilPersist();
export const SessionDataState = atom({
  key: "SessionDataState",
  default: {} as SessionData,
});

export const SideBarState = atom({
  key: "SideBarState",
  default: true,
});

export const OpeningIndexState = atom({
  key: "OpeningIndexState",
  default: 0,
});

export const ShowingModalState = atom({
  key: "ShowingModalState",
  default: "",
});

export const UserRuleState = atom({
  key: "UserRuleState",
  default: "Student" as UserRule,
  effects_UNSTABLE: [persistAtom],
});

export const EditingItemState = atom({
  key: "EditingItemState",
  default: {} as EditingItem,
});
