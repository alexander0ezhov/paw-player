import { create } from "zustand";
import { Routes, RoutingType } from "@root/global-types";
import { createDebounce } from "@utils/func";

const debounce = createDebounce();
const STORE_NAME = "routingStore";

type State = RoutingType;
type Actions = {
  redirect: (route: RoutingType["route"]) => void;
};

const saveStoreData = async (storeData: State & Actions) => {
  const { route } = storeData;
  const dataToSave = { route };
  return await window.node.saveUserData(STORE_NAME, dataToSave);
};

export const useRoutingStore = create<State & Actions>((set, get) => ({
  route: Routes.Root,
  redirect: (route) => {
    set({ route });
    debounce(saveStoreData.bind(null, get()), 5000);
  },
}));
