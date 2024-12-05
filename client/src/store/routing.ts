import { create } from "zustand";
import { Routes, RoutingType } from "@root/global-types";
import { createDebounce } from "@utils/func";

type State = RoutingType;
type Actions = {
  redirect: (route: RoutingType["route"]) => void;
};

const debounce = createDebounce();
const STORE_NAME = "routingStore";

const getStoreData: () => Promise<Partial<State>> =
  window.node.loadUserData.bind(null, STORE_NAME);
const saveStoreData = async (storeData: State & Actions) => {
  const { route } = storeData;
  const dataToSave = { route };
  return await window.node.saveUserData(STORE_NAME, dataToSave);
};

export const useRoutingStore = create<State & Actions>((set, get, ap) => {
  getStoreData().then(set);
  return {
    route: Routes.Root,
    redirect: (route) => {
      set({ route });
    },
  };
});

useRoutingStore.subscribe((store) => {
  debounce(saveStoreData.bind(null, store), 5000);
});
