import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserRole, EditingItem, SessionData, UserData } from "../type";

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

export const UserRoleState = atom({
  key: "UserRoleState",
  default: "Student" as UserRole,
  effects_UNSTABLE: [persistAtom],
});

export const EditingItemIdState = atom({
  key: "EditingItemIdState",
  default: null as string | null,
});

export const UserDataState = atom<UserData>({
  key: "UserDataState",
  default: {} as UserData,
  effects_UNSTABLE: [persistAtom],
});
